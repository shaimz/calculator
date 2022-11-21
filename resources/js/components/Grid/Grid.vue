<template>
  <div :id="indexId" :class="gridDivClass">
    <div :style="swarmGridStyle" class="grid-body" >
      <table class="table-grid" cellpadding="0" border="0">
        <thead v-if="!removeHeaders">
          <tr v-if="columns.length">
            <th class="table-cell sticky-heading" v-if="useDrag"></th>
            <th
              v-for="column in visibleColumns"
              :key="column.name"
              class="table-cell sticky-heading"
              :style="columnWidth(column)"
              @click="sortBy(column.name)"
              :class="thClass(column)"
              nowrap
            >
              {{ column.label }}
              <span v-html="arrow(column)"></span>
            </th>
            <th v-if="columnActions.length > 0" class="table-action sticky-heading">
              Action
            </th>
          </tr>
        </thead>
        <grid-body :rows="filteredRows" :useDrag="useDrag && !locked" :key="componentKey" @row-order-change="onRowOrderDragChange">
          <template #body>
          <tr
            v-for="(row, rowIndex) in filteredRows"
            :key="rowKey(row, rowIndex)"
            :id="'row-' + rowIndex"
            :data-id="rowKey(row, rowIndex)"
            :class="{'hightlighted-table-row': row.isHighlighted}"
          >
            <td
              v-if="useDrag" class="move-column pointer"
              nowrap
              draggable="true"
              title="Move"
              :style="columnWidth({ fixedWidth: '5%' })"
              @dragstart="dragStart($event, rowKey(row, rowIndex))"
            >
              <i :class="getDragClass(rowKey(row, rowIndex))"></i>
            </td>
            <td
              v-for="column in visibleColumns"
              :style="columnWidth(column)"
              :class="[cellClass(rowKey(row, rowIndex), column.name), { 'text-right': isNumberInput(rowIndex, column)}]"
              :key="column.name"
              nowrap
            >
              <!-- checkbox -->
              <label v-if="cellDisplayType[rowIndex][column.name] === 'checkbox'" class= "checkbox-container" :style="(column.disabled || locked || row.rules && row.rules[column.name] && row.rules[column.name].disabled)?'cursor: default':''">
                <input
                  :ref="column.name + rowIndex"
                  :id="'checkbox-' + column.name + rowIndex"
                  type="checkbox"
                  v-model="row[column.name]"
                  @change="updateDifferences(column.name, rowIndex)"
                  :disabled="column.disabled || locked || row.rules && row.rules[column.name] && row.rules[column.name].disabled"
                />
                <span class="checkmark"></span>
              </label>
              <!-- datetime -->
              <span v-else-if="datetimes[column.name]">{{ formatDate(row[column.name]) }}</span>
              <!-- lockedColumns -->
              <span v-else-if="!!column.locked">
                {{ row[column.name] }}
              </span>
              <span v-else-if="(column.disabled || locked) && (isStringInput(rowIndex, column.name) || isDateInput(rowIndex, column.name)) ">
                {{ row[column.name] }}
              </span>
              <span v-else-if="(column.disabled || locked) && cellDisplayType[rowIndex][column.name] === 'dropdown'">
                {{ dropdownValue(column, row)}}
              </span>
              <span v-else-if="cellDisplayType[rowIndex][column.name] === 'note'" class="note">
                {{ row[column.name] }}
              </span>
              <span v-else-if="cellDisplayType[rowIndex][column.name] === 'list'" class="list">
                {{ row[column.name] }}
              </span>
              <span v-else-if="cellDisplayType[rowIndex][column.name] === 'link'">
                <slot name="link-column" :column="column" :row="row">
                  <a :href="column.linkFor(row)">
                    {{ row[column.name] }}
                  </a>
                </slot>
              </span>
              <span v-else-if="cellDisplayType[rowIndex][column.name] === 'icon'">
                <i :class="getIcon(row[column.name])" />
              </span>
              <!-- dependent dropdown -->
              <span v-else-if="depdropdowns[column.name]">
                <b-form-select
                  :ref="column.name + rowIndex"
                  class="nst-select"
                  v-model="row[column.name]"
                  @change="updateDifferences(column.name, rowIndex)"
                >
                  <option
                    class="nst-tables-option"
                    v-for="option in depdict[column.name][lastWord(row['target_table'])]"
                    :key="option"
                    :style="inputStyle"
                    :value="option"
                    >{{ option }}</option
                  >
                </b-form-select>
              </span>
              <!-- dropdown -->
              <span v-else-if="cellDisplayType[rowIndex][column.name] === 'dropdown'">
                <b-form-select
                  :ref="column.name + rowIndex"
                  :id="'select-' + column.name + rowIndex"
                  class="nst-select"
                  :style="(column.disabled || locked || row.rules && row.rules[column.name] && row.rules[column.name].disabled)?'cursor: default':inputStyle"
                  v-model="row[column.name]"
                  @change="updateDifferences(column.name, rowIndex)"
                  :disabled="column.disabled || row.rules && row.rules[column.name] && row.rules[column.name].disabled"
                >
                  <option
                    class="nst-tables-option"
                    v-for="(option, optionKey) in getOptions(row, column)"
                    :key="'option-' + optionKey"
                    :value="option.value"
                    :selected="option.selected"
                    :disabled="option.disabled"
                    :hidden="option.hidden"
                  >{{ option.label }}</option>
                </b-form-select>
              </span>
              <input v-else-if="isNumberInput(rowIndex, column)"
                type="number"
                v-model.number="row[column.name]"
                @keypress="validNumberKeypress($event)"
                :size="column.size || ''"
                :width="column.width || '100%' "
                :id="column.name + rowIndex"
                :ref="column.name + rowIndex"
                :class="rowclass"
                :disabled="locked"
                :style="inputStyle"
                @input="updateDifferences(column.name, rowIndex)"
                @blur="validateField(column, rowIndex)"
                :readonly="!!column.disabled"
              />
              <input v-else-if="isDateInput(rowIndex, column.name)"
                class="date-input"
                type="date"
                v-model="row[column.name]"
                :size="column.size || '' "
                :width="column.width || '100%' "
                :disabled="locked"
                :id="column.name + rowIndex"
                :ref="column.name + rowIndex"
                :class="rowclass"
                :style="inputStyle"
                @input="updateDifferences(column.name, rowIndex)"
                @blur="validateField(column, rowIndex)"
                :readonly="!!column.disabled"
              />
              <input v-else-if="isStringInput(rowIndex, column.name)"
                v-model="row[column.name]"
                :type="row.rules && row.rules[column.name] && row.rules[column.name].row_type || 'text'"
                :size="column.size || '' "
                @keypress="validInputSize($event, column, row[column.name])"
                :disabled="locked || row.rules && row.rules[column.name] && row.rules[column.name].disabled"
                :width="column.width || '100%' "
                :id="column.name + rowIndex"
                :ref="column.name + rowIndex"
                :class="rowclass"
                :style="inputStyle"
                @input="updateDifferences(column.name, rowIndex)"
                @blur="validateField(column, rowIndex)"
                :placeholder="column.placeholder"
                :readonly="!!column.disabled || row.rules && row.rules[column.name] && row.rules[column.name].disabled"
              />
            </td>
            <td v-if="columnActions.length > 0" class="table-action" nowrap>
              <TableButtons
                v-on="$attrs"
                :entry="row"
                :indexRow="rowIndex"
                :actions="rowActions ? rowActions(row) : columnActions"
                :deleteConfirmation="deleteConfirmation"
                @row-up="onRowOrderChange($event, -1)"
                @row-down="onRowOrderChange($event, 1)"
                @row-enter="onRowEnter"
              ></TableButtons>
            </td>
          </tr>
          </template>
        </grid-body>
      </table>
    </div>
    <slot name="create-button"></slot> 
    <slot name="pagination"></slot>
  </div>
</template>

<script>
import { indexBy, isEmptyObject, validNumberKeypress, validInputSize } from './services/utils'
import { castValue, formatErrorMessage, validate } from './services/fields'
// Components
import TableButtons from './TableButtons'
import GridBody from './GridBody'

export default {
  components: { TableButtons, GridBody },
  props: {
    customDecorateRows: {
      type: Function,
      default: null
    },
    searchFilter: {
      type: Object,
      default: () => { return {} }
    },
    gridDivClass: {
      type: String,
      default: () => {
        return 'grid-div'
      }
    },
    indexId: {
      type: String,
      default: ''
    },
    idPrefix: {
      type: String,
      default: ''
    },
    swarmGridStyle: {
      type: String,
      default: () => {
        return ''
      }
    },
    deleteConfirmation: {
      type: Boolean,
      default: true
    },
    rows: {
      type: Array,
      required: true
    },
    rowsBackup: {
      type: Array,
      default: function () {
        return JSON.parse(JSON.stringify(this.rows))
      }
    },
    columns: {
      type: Array,
      default: () => { return [] }
    },
    datetimes: {
      type: Object,
      default: () => { return {} }
    },
    depdropdowns: {
      type: Object,
      default: () => { return {} }
    },
    depdict: {
      type: Object,
      default: () => { return {} }
    },
    dropdowns: {
      type: Object,
      default: () => { return {} }
    },
    inputStyle: {
      type: String,
      default: ''
    },
    keyColumn: {
      type: String,
      default: '_id'
    },
    lockedColumnsStyle: {
      type: String,
      default: ''
    },
    removeHeaders: {
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: () => { return [] }
    },
    mode: {
      type: String,
      default: 'view'
    },
    rowclass: {
      type: String,
      default: () => { return 'rows-1' }
    },
    rowActions: {
      type: Function,
      default: null
    },
    useDrag: {
      type: Boolean,
      default: false
    },
    locked: {
      type: Boolean,
      default: false
    }
  },
  name: 'Grid',
  data: function () {
    return {
      /** For difference tracking to work, rows *must* have a `keyColumn` identifying them
       *  In case they don't, the parent component can set the `index` of each row as its `_id`
       *    rows.map((value, index) => ({ ...value, _id: index + 1}))
       */
      differences: {},
      flags: {},
      compare: '',
      checkOff: false,
      codeStr: '',
      rec: {},
      arrowSortBy: { key: '', direction: 0 },
      iconsSize: 24,
      componentKey: 0,
      changeDragIcon: ''
    }
  },
  watch: {
    'gridParent.asset': function (newVal, oldValue) {
      this.resetSortOrder()
    },
    rows: function (value, oldValue) {
      if (value !== oldValue) {
        this.resetDifferences()
        this.changeDragIcon = ''
        this.validateGridAndNotify()
      }
    },
    columns: function () {
      this.resetSortOrder()
    }
  },
  computed: {
    visibleColumns: function () {
      return this.columns.filter(column => column.display_type !== 'hidden')
    },
    thClass: function () {
      let sortKey = this.arrowSortBy.key
      return column => {
        return {
          active: sortKey === column.name,
          'text-right': this.isNumberInput(null, column)
        }
      }
    },
    cellDisplayType: function () {
      let table = []
      for (let row of this.filteredRows) {
        let display = {}
        for (let column of this.columns) {
          display[column.name] = this.displayType(row, column)
        }
        table.push(display)
      }
      return table
    },
    arrow: function () {
      let { key, direction } = this.arrowSortBy
      return (column) => {
        if (key !== column.name) return
        if (direction === 1) return 'order-arrow-up'
        if (direction === -1) return 'order-arrow-down'
      }
    },
    isSortActive () {
      return this.arrowSortBy.key && this.arrowSortBy.direction
    },
    columnActions () {
      /** Currently, add is the only non-row level action */
      let actions = this.actions.filter(action => action !== 'add')
      if (this.isSortActive) {
        actions = actions.filter(action => action !== 'arrows')
      }
      return actions
    },
    originalRows () {
      return indexBy(this.rowsBackup, this.keyColumn)
    },
    tableWidth: function () {
      return this.$root.tableContext && this.$root.tableContext.widthtbl ? this.$root.tableContext.widthtbl : ''
    },
    tdWidth: function () {
      if (this.columns.length === 0) return 'auto'
      let actionsWidth = (this.columnActions.length > 0) ? 10 : 0
      let percentage = (100 - actionsWidth) / this.columns.length
      return `${percentage}%`
    },
    filteredRows: function () {
      let rows = this.rows
      if (typeof this.customDecorateRows === 'function') {
        rows = this.customDecorateRows(rows)
      }
      if (!(this.searchFilter && this.searchFilter.term && this.searchFilter.columns && this.searchFilter.columns.length)) return rows
      let filteredRows = rows.filter(row => {
        for (let i = 0; i < this.searchFilter.columns.length; i++) {
          let string = row[this.searchFilter.columns[i]] + ''
          if (typeof string !== 'string') {
            console.warn('NOT A STRING', this.searchFilter.columns[i], row)
            continue
          }

          let result = 0
          let term = this.searchFilter.term.toLowerCase()
          string = string.toLowerCase()
          term = term.replace(/[&\/\\#\\[,+()$~%.'":*?<>{}]/g,'\\$&')
          if(term) result = string.search(term)
          if (result !== -1) return true
        }
        return
      })
      return filteredRows
    }
  },
  filters: {
    capitalize: function (string = '') {
      return string.charAt(0).toUpperCase() + string.slice(1).split('_').join(' ')
    }
  },
  methods: {
    async dragStart(e, id) {
      this.changeDragIcon = id
      await waitAWhile(10)
      this.changeDragIcon = ''

    },
    setMode (mode) {
      this.$emit('set-mode', mode)
    },
    getIcon (thing) {
      switch (thing) {
        case 'bundle':
          return 'sw-cowboy'
        case 'challenge':
          return 'sw-goal'
        case 'optimization':
          return 'sw-grid'
        case 'dictionary':
          return 'sw-book'
        case 'usecase':
          return 'sw-axe-tool sw-invert'
        default:
          return 'sw-home'
      }
    },
    getDragClass(id){
      if (this.changeDragIcon === id) return 'sw-article'
      return 'sw-threedots-vertical'
   },
    columnWidth (column) {
      if (column.width) return `width: ${column.width}`
      if (column.fixedWidth) return `width: ${column.fixedWidth}; !important; min-width: ${column.fixedWidth} !important; max-width: ${column.fixedWidth} !important`
      return this.tdWidth
    },
    displayType (row, column) {
      if (column.display_type === 'controlled' && column.hasOwnProperty('display_controlled_by')) {
        if(['value', 'keyValue'].includes(row[column.display_controlled_by])) {
          return 'list'
        }
        if (!row.hasOwnProperty('rules')) row.rules = {}
        row.rules[column.name] = { required: true, name: column.name, display_type: row[column.display_controlled_by] }
        return row[column.display_controlled_by]
      }
      return row && row.rules && row.rules[column.name] && row.rules[column.name].display_type ? row.rules[column.name].display_type : column.display_type
    },
    getOptions (row = {}, column) {
      return row.options || column.options
    },
    onRowOrderDragChange (action) {
      let { newIndex, oldIndex, element } = action.moved

      let rows = this.rows
      rows = rows.slice()
      rows.splice(oldIndex, 1)
      rows.splice(newIndex, 0, element)
      rows = rows.map((row, order) => ({ ...row, order }))

      let upper = Math.max(oldIndex, newIndex)
      let lower = Math.min(oldIndex, newIndex)

      for(let i = lower; i <= upper; i++) {
        let id = rows[i].hasOwnProperty('_id') ? rows[i]._id : rows[i].id
        this.addDifference('order', id)
      }
      this.$emit('rows-order', { rows })
      this.onCommandSave()
    },
    onRowOrderChange (rowIndex, offset) {
        let rows = this.filteredRows
        let currentRow = rows[rowIndex]
        let currentRowOrder = currentRow.order
        if (currentRowOrder === undefined) return

        let replaceIndex = rowIndex + offset
        if (replaceIndex < 0 || replaceIndex > (rows.length - 1)) return

        let replaceRow = rows[replaceIndex]

        currentRow.order = replaceRow.order
        replaceRow.order = currentRowOrder

        this.updateDifferences('order', rowIndex)
        this.updateDifferences('order', replaceIndex)

        this.$emit('row-swap', { rowIndex, replaceIndex })
    },
    onRowEnter(indexRow, entry){
      this.$emit('row-enter', indexRow, entry)
    },
    rowKey (row, rowIndex) {
      return (row[this.keyColumn] || rowIndex).toString()
    },
    cellClass(rowId, columnName) {
      return this.flags.hasOwnProperty(rowId) && this.flags[rowId].hasOwnProperty(columnName) ? this.flags[rowId][columnName] : ''
    },
    resetDifferences () {
      this.differences = {}
      this.flags = {}
    },
    isHighlighted: function (row) {
      let isHighlighted = false
      //
      // TODO: Allow passing in columns to check for highlighting
      //
      // if (Object.keys(this.checkboxColumns).length) {
      //   /** If there are columns with checkboxes (checks) */
      //   Object.keys(this.checkboxColumns).forEach(key => {
      //     /** For each columns with checkboxes see if the row has it checked */
      //     if (row[key]) { isHighlighted = true }
      //   })
      // }
      //
      return isHighlighted
    },
    validNumberKeypress,
    validInputSize,
    isStringInput (rowIndex, columnName) {
      return ['input','string','text'].includes(this.cellDisplayType[rowIndex][columnName])
    },
    isNumberInput (rowIndex, column) {
      const numTypes = ['integer', 'decimal(2)', 'decimal(4)', 'number']
      if (typeof rowIndex === 'number') return numTypes.includes(this.cellDisplayType[rowIndex][column.name])
      return numTypes.includes(column.display_type)
    },
    isDateInput (rowIndex, columnName) {
      return ['date', 'shortdate'].includes(this.cellDisplayType[rowIndex][columnName])
    },
    formatDate: function (dateString) {
      return ''
      /** According to opsdash main.js: dateFormat: 'YYYY-MM-DD hh:mm:ss' */
      // return swarmSDK.utils.timestamp(dateString, this.$root.dateFormat)
    },
    resetSortOrder: function () {
      this.arrowSortBy = { key: '', direction: 0 }
    },
    sortBy: function (key) {
      let column = this.columns.find(column => column.name === key)
      if (this.$root.frameEditMode) {
        this.$notify({
          type: 'warn',
          title: 'There are unsaved changes!',
          text: 'Please Save or Cancel your changes before proceeding!'
        })
        return
      }
      if (this.arrowSortBy.key === key) {
        const nextDirection = { '-1': 0, 0: 1, 1: -1}
        this.arrowSortBy.direction = nextDirection[this.arrowSortBy.direction]
      } else {
        this.arrowSortBy = {key: key, direction: 1}
      }
      let direction = this.arrowSortBy.direction
      /** Tell parent so sort grid */
      this.$emit('sort-grid-by', { column, direction })
    },
    validateField (column, rowIndex, showNotification = true) {
      if (column.locked) return true
      let row = this.filteredRows[rowIndex]
      if (!row) {
        console.error('Missing row: ', rowIndex)
        return false
      }
      /** Reset warning flag before validation */
      let rowId = this.rowKey(row, rowIndex)
      if (!this.flags.hasOwnProperty(rowId)) this.flags[rowId] = {}
      this.flags[rowId][column.name] = null
      /** All columns are Mandatory for the moment */
      let inputValue = castValue(row[column.name], this.cellDisplayType[rowIndex][column.name])
      let validation = (row.rules && row.rules[column.name]) || column
      let result = validate(inputValue, validation)
      if (!result.valid) {
        this.flags[rowId][column.name] = 'warning-status'
        this.flags = {... this.flags}
        if (showNotification) {
          this.$notify({
            type: 'warn',
            title: 'Warning!',
            text: formatErrorMessage(result.error),
            duration: 4000,
            speed: 1000
          })
        }
        return false
      }
      /** Update row object in place, once value is deemed valid */
      row[column.name] = inputValue
      return true
    },
    updateDifferences: function (column, rowIndex) {
      let row = this.filteredRows[rowIndex]
      let rowId = row[this.keyColumn]
      /** Check if new row or existing row with changed value for column */
      if (this.checkDifference(column, rowId, row)) {
        this.addDifference(column, rowId)
        /** If cell type changed, delete value */
        let affectedColumns = this.columns.filter(col => col.hasOwnProperty('display_controlled_by') && col.display_controlled_by === column)
        if (affectedColumns.length) {
          for (let col of affectedColumns) {
            row[col.name] = ''
          }
        }
      } else {
        this.removeDifference(column, rowId)
      }
      /** Check if there are any differences left */
      let newMode = isEmptyObject(this.differences) ? 'view' : 'edit'
      /** Only emit `set-mode` events once mode changes */
      if (newMode !== this.mode) {
        this.setMode(newMode)
      }
    },
    checkDifference: function (column, rowId, row) {
      /** Newly added rows always count as differences */
      let originalRow = this.originalRows[rowId]
      if (!originalRow) return true

      const valueOrDefault = (value, defaultValue) => {
        return (value === undefined || value === null) ? defaultValue : value
      }

      /** Compare values as strings, since inputs are converted to string values */
      let rowValue = valueOrDefault(row[column], '')
      let backupValue = valueOrDefault(originalRow[column], '')

      return rowValue.toString() !== backupValue.toString()
    },
    addDifference: function (column, row) {
      if (!this.differences[row]) {
        this.differences[row] = {}
      }
      this.differences[row][column] = true
    },
    removeDifference: function (column, row) {
      if (!this.differences[row]) return
      delete this.differences[row][column]

      if (isEmptyObject(this.differences[row])) {
        delete this.differences[row]
      }
    },
    dropdownValue: function (column, row) {
      let option = this.getOptions(row, column).find(statusOption => statusOption.value === row[column.name])
      return (option && option.label) || 'N/A'
    },
    lastWord: function (str) {
      var parts = str.split('.')
      if (parts.length > 1) {
        return parts[1]
      } else {
        return parts[0]
      }
    },
    validateGrid () {
      if (!(this.rows && this.rows.length)) return true
      let valid = true
      let rows = this.rows
      // if (this.debugMode) console.log('Validating grid: ', rows)
      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        for (let column of this.columns) {
          /** Go through all rows, in order to display all validations */
          if (!this.validateField(column, rowIndex, false)) {
            valid = false
          }
        }
      }
      return valid
    },
    validateGridAndNotify () {
      if (!this.validateGrid()) {
        this.$notify({
          type: 'warn',
          title: 'Warning!',
          text: 'There are incomplete or invalid rows!'
        })
      }
    },
    addHiddenDifferences () {
      let hiddenColums = this.columns.filter(column => column.display_type === 'hidden')
      if (!hiddenColums.length) return
      for (let column of hiddenColums) {
        for (let row of this.rows) {
          if (this.checkDifference(column.name, row['_id'], row)) {
            this.addDifference(column.name, row['_id'])
          } else {
            this.removeDifference(column.name, row['_id'])
          }
        }
      }
    },
    getModifiedRows () {
      let key = this.keyColumn
      this.addHiddenDifferences()
      return this.rows.filter(row => this.differences[row[key]])
    },
    onCommandSave () {
      let valid = this.validateGrid()
      let rows = this.rows
      let modifiedRows = this.getModifiedRows()
      this.$emit('save-grid', { valid, rows, modifiedRows })
    },
    onRowDeleted (rowId) {
      /** Synchronize differences when rows are deleted */
      delete this.differences[rowId]
      delete this.flags[rowId]
      if (isEmptyObject(this.differences)) {
        this.setMode('view')
      }
    }
  },
  beforeDestroy () {
    this.$off('command-save')
    this.$off('command-cancel')
    this.$off('row-was-deleted')
  },
  created () {
    this.$on('command-save', this.onCommandSave)
    this.$on('command-cancel', this.resetDifferences)
    this.$on('row-was-deleted', this.onRowDeleted)
    /** Update rows with initial data from props, before first render */
    this.validateGridAndNotify()
  }
}
</script>

<style scoped lang="scss">
.move-column {
  width: 1% !important;
  max-width: 1% !important;
  min-width: 1% !important;

  i {
    display: flex;
    font-size: 20px;
  }
}
.date-input::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

.note {
  color: #bbb;
  font-style: italic;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}

.list {
  color: #bbb;
  font-style: italic;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 200px;
  display: inline-block;
}

.grid-div {
  margin-bottom: 15px;
  margin-top: 0;
  overflow: auto;
  display: grid;
  grid-template-rows: 1fr auto;
}

.grid-div input {
  max-width: 550px;
  margin-top: 2px;
  margin-bottom: 2px;
  height: 26px;
  width: 100%;
}

.grid-div th {
  padding: 0 10px;
}

.table-action {
  text-align: center;
  width: 10% !important;
  border-left: 3px solid #2b2e32 !important;
}

.text-right input {
  text-align: right;
}

.table-grid {
  border-style: solid;
  border-color: black;
  border: 1px;
  padding: 0px;
  padding-right: 2px;
  margin: 0px;
  width: 100%;
}

.rows-1 {
  padding: 1px;
}

.rows-2 {
  padding: 1px;
}

td {
  padding-left: 10px;
  padding-right: 10px;
}

td > input {
  margin-left: 0px;
}
/* #targetRows > table > tbody > tr:nth-child(n) > td:nth-child(4) {
  padding-right: 20px;
} */

.sticky-heading {
  cursor: pointer;
  position: sticky;
  top: 0;
  z-index: 10;
}

/*checkbox*/
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.checkbox-container input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 15px;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: -7px;
  left: 10px;
  height: 26px;
  width: 26px;
  min-width: 26px !important;
  max-width: 26px !important;
  background-image: linear-gradient(101deg, #26272b 9%, #34393f 92%);
  box-shadow: -1px -1px 1px 0px #00000063;
  border-radius: 4px;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  transition: transform ease 0.25s;
}

/* Show the checkmark when checked */
.checkbox-container input[type="checkbox"]:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 8px;
  height: 13px;
  border: solid #f29807;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  transition: transform ease 0.25s;
}
:checked ~ .checkmark:after {
  display: block;
}
.nst-select {
  border: none;
  background-color: transparent;
  color: #ffffff;
  line-height: 20px;
  height: 31px;
  border-radius: 10px;
  font-family: "Exo 2", sans-serif;
  box-shadow: 0px 0px 7px 0px #4f4f50;
  width: 100%;
  padding: 0 10px;
  font-size: 11px;
  letter-spacing: 2px;
}
.grid-div .nst-select {
  box-shadow: none;
  font-size: 12px !important;
  font-weight: 500 !important;
  padding-left: 0 !important;
}
.grid-div .nst-select:focus {
  outline: none;
  box-shadow: none;
}
.nst-select option {
  background: #26272b;
  font-size: 12px;
  letter-spacing: 2px;
  color: #fff;
  font-family: "Exo 2", sans-serif;
}
.light-mode .nst-select option {
  background: #e9e9e9;
  color: #555;
}
.light-mode .nst-select {
  color: #555;
}
.light-mode .date-input::-webkit-calendar-picker-indicator {
  filter: invert(25%);
}
.light-mode .table-action {
  border-left: 3px solid #dfdfdf !important;
}
.table-pagination {
  margin-top: 15px;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 50px;
  left: 0;
}
.table-pagination span {
  color: #bbb;
}
.table-pagination button {
  -webkit-appearance: button;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  --dm-left: 0px;
  background-color: #fb8c00;
  border: none;
  border-collapse: collapse;
  border-radius: 0.25rem;
  box-sizing: border-box;
  color: #27283c;
  cursor: pointer;
  display: inline-block;
  font-family: "Exo 2", sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 40px;
  line-height: 1.5;
  margin: 0 30px;
  min-width: 100px;
  overflow: visible;
  outline: none;
  padding: 0.375rem 0.75rem;
  text-transform: uppercase;
  text-align: center;
  transition: none;
  user-select: none;
  vertical-align: middle;
}
.create-button {
  font-size: 26px;
  height: min-content;
  width: min-content;
  border: 0;
  background-color: transparent;
  color: #fff;
  text-align: left;
}
input::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  opacity: 1; /* Firefox */
}

input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: white;
}

input::-ms-input-placeholder {
  /* Microsoft Edge */
  color: white;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.warning-status {
  border: 1px solid orange !important;
}

table i {
  font-size: 24px;
}

.light-mode .table-grid span i::before {
  color: #555;
}

.hightlighted-table-row td {
  background: #f29807 !important;
}
</style>
