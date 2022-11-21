<template>
  <div class="m-0 p-0">
    <button v-if="showArrows" :id="idPrefix+'-up-button-'+indexRow" class="btn p-0 border-0 bg-transparent" @click.stop.prevent="upRow(indexRow, entry)" size="xs">
      <Icon :iconType="'arrowDownDropCircle'" :size="iconsSize" :spanClass="'icon-btns'" />
      <b-tooltip :target="idPrefix+'-up-button-'+indexRow" triggers="hover"> Move up </b-tooltip>
    </button>
    <button v-if="showArrows" :id="idPrefix+'-down-button-'+indexRow" class="btn p-0 border-0 bg-transparent" @click.stop.prevent="downRow(indexRow, entry)" size="xs">
      <Icon :iconType="'arrowUpDropCircle'" :size="iconsSize" class="icon-btns" />
      <b-tooltip :target="idPrefix+'-down-button-'+indexRow" triggers="hover"> Move down </b-tooltip>
    </button>
    <button v-if="showEditRow" :id="idPrefix+'-edit-outline-'+indexRow" class="btn p-0 border-0 bg-transparent" @click.stop.prevent="editRow(indexRow, entry)" size="xs">
      <Icon :iconType="'circleEditOutline'" :size="iconsSize" class="icon-btns" />
      <b-tooltip :target="idPrefix+'-edit-outline-'+indexRow" triggers="hover"> Edit details </b-tooltip>
    </button>
    <button v-if="showMagnify" :id="idPrefix+'-magnify-button-'+indexRow" class="btn p-0 border-0 bg-transparent" @click.stop.prevent="search(indexRow, entry)" size="sm">
      <Icon :iconType="'magnify'" :size="iconsSize" class="icon-btns" />
      <b-tooltip :target="idPrefix+'-magnify-button-'+indexRow" triggers="hover"> View details </b-tooltip>
    </button>
    <button v-if="showDelRow" :id="idPrefix+'-delete-button-'+indexRow" class="btn p-0 border-0 bg-transparent" @click.stop.prevent="deleteRow(indexRow, entry)" size="sm">
      <Icon :iconType="'deleteCircle'" :size="iconsSize" class="icon-btns" />
      <b-tooltip :target="idPrefix+'-delete-button-'+indexRow" triggers="hover" placement="bottom"> Delete row </b-tooltip>
    </button>
  </div>
</template>

<script>

import Icon from './Icon'

export default {
  name: 'Actions',
  components: {
    Icon
  },
  props: {
    entry: {
      type: Object,
      required: true
    },
    iconsSize: {
      type: Number,
      required: false,
      default: function () {
        return 24
      }
    },
    idPrefix: {
      type: String,
      required: false,
      default: function () {
        return ''
      }
    },
    indexRow: {
      type: Number,
      required: true
    },
    rowActions: {
      type: String,
      required: false,
      default: function () {
        return 'on'
      }
    }
  },
  computed: {
    showArrows: function () {
      var result = false
      switch (this.rowActions) {
        case 'arrows':
        case 'arrowsedit':
        case 'on':
          result = true
          break
      }
      return result
    },
    showDelRow: function () {
      var result = false
      switch (this.rowActions) {
        case 'del':
        case 'searchdel':
          result = true
          break
      }
      return result
    },
    showEditRow: function () {
      var result = false
      switch (this.rowActions) {
        case 'on':
          result = true
          break
      }
      return result
    },
    showMagnify: function () {
      var result = false
      switch (this.rowActions) {
        case 'search':
        case 'searchdel':
          result = true
          break
      }
      return result
    }
  },
  methods: {
    deleteRow: function (key, rec) {
      if (process.env.VUE_APP_DEBUG) console.log('deleteRow emit: delete-row')
      this.$parent.$emit('delete-row', key, rec)
    },
    downRow: function (key, rec) {
      if (process.env.VUE_APP_DEBUG) console.log('downRow emit: down-row')
      this.$parent.$emit('down-row', key, rec)
    },
    editRow: function (key, rec) {
      if (process.env.VUE_APP_DEBUG) console.log('editRow emit: edit-row')
      this.$parent.$emit('edit-row', key, rec)
    },
    search: function (key, rec) {
      if (process.env.VUE_APP_DEBUG) console.log('search emit: magnify-row')
      this.$parent.$emit('magnify-row', key, rec)
    },
    upRow: function (key, rec) {
      if (process.env.VUE_APP_DEBUG) console.log('upRow emit: up-row')
      this.$parent.$emit('up-row', key, rec)
    }
  }
}
</script>

<style></style>
