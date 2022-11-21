// import moment from 'moment'

export const naturalSort = (a, b) => {
  let re = /(^([+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|^0x[\da-fA-F]+$|\d+)/g
  let sre = /^\s+|\s+$/g
  let snre = /\s+/g
  let dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/
  let hre = /^0x[0-9a-f]+$/i
  let ore = /^0/
  let i = function (s) {
    return (naturalSort.insensitive && ('' + s).toLowerCase() || '' + s).replace(sre, '')
  }
  let x = i(a)
  let y = i(b)
  let xN = x.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0')
  let yN = y.replace(re, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0')
  let xD = parseInt(x.match(hre), 16) || (xN.length !== 1 && Date.parse(x))
  let yD = parseInt(y.match(hre), 16) || xD && y.match(dre) && Date.parse(y) || null
  let normChunk = function (s, l) {
    return (!s.match(ore) || l == 1) && parseFloat(s) || s.replace(snre, ' ').replace(sre, '') || 0
  }
  let oFxNcL
  let oFyNcL
  if (yD) {
    if (xD < yD) { return -1 }
    else if (xD > yD) { return 1 }
  }
  for (let cLoc = 0, xNl = xN.length, yNl = yN.length, numS = Math.max(xNl, yNl); cLoc < numS; cLoc++) {
    oFxNcL = normChunk(xN[cLoc] || '', xNl)
    oFyNcL = normChunk(yN[cLoc] || '', yNl)
    if (isNaN(oFxNcL) !== isNaN(oFyNcL)) {
      return isNaN(oFxNcL) ? 1 : -1
    }
    if (/[^\x00-\x80]/.test(oFxNcL + oFyNcL) && oFxNcL.localeCompare) {
      let comp = oFxNcL.localeCompare(oFyNcL)
      return comp / Math.abs(comp)
    }
    if (oFxNcL < oFyNcL) { return -1 }
    else if (oFxNcL > oFyNcL) { return 1 }
  }
}

/** Useful for grids that require *local* sorting, without the overhead of a FactsGrid instance */
export function simpleGridSortBy (rows, { column, direction }, initialSortBy = 'order') {
  /** When direction is '0', use initialSortBy, as the sort order */
  let key = direction ? column.name : initialSortBy
  return rows.sort(function (row1, row2) {
    let firstRow = (row1[key] || '').toString().replace(/,/g, '')
    let secondRow = (row2[key] || '').toString().replace(/,/g, '')
    /** When direction is '0', use `1` as direction to avoid multiplying by zero */
    return naturalSort(firstRow, secondRow) * (direction || 1)
  })
}

export function ucfirst (title) {
  title = title.toLowerCase()
  return title.charAt(0).toUpperCase() + title.slice(1).replace('_', ' ')
}

export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0
}

export const pluckArray = (value, propName) => {
  let array = value && value[propName]
  if (Array.isArray(array)) {
    return array
  } else {
    return []
  }
}

export const emptyObjectsArray = (size) => {
  return Array(size).fill(null).map(() => ({}))
}

export const indexBy = (values, propName) => {
  let index = Object.create(null)
  for (let value of values) {
    index[value[propName]] = value
  }
  return index
}

export const groupBy = (values, propName) => {
  let index = {}
  for (let value of values) {
    let key = value[propName]
    if (!index[key]) index[key] = []
    index[key].push(value)
  }
  return index
}

// const timestamp = (dateString, dateFmt) => {
//   let result = 'n/a'
//   if (dateString === '' || dateString === result) {
//     return result
//   }
//   result = moment.utc(dateString).format(dateFmt)
//   if (result === 'Invalid date') {
//     result = 'n/a'
//   }
//   return result
// }

/** Input helpers */
export const inputDisplayTypes = {
  'integer': 'number',
  'decimal(2)': 'number',
  'decimal(4)': 'number',
  'number': 'number'
}
export const numberKeyPressRegex = /^[0-9.-]*$/

// https://stackoverflow.com/questions/39782176/filter-input-text-only-accept-number-and-dot-vue-js#answer-39786700
// https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
export const validNumberKeypress = (event) => {
  if (!numberKeyPressRegex.test(event.key)) {
    event.preventDefault()
    return false
  }
  return true
}

export const validInputSize = (event, column, value) => {
  if (!column.validation || !column.validation.size) return true
  const size = parseInt(column.validation.size)
  const val = (value || '').length

  if (val >= size) {
    event.preventDefault()
    return false
  }
  return true
}

/** Helper functions for dataset inputs */

export const maxRowId = (rows) => {
  let maxId = 0
  for (let row of rows) {
    if ((row.row_id > maxId) && !isNaN(row.row_id)) {
      maxId = row.row_id
    }
  }
  return maxId
}


/** Newly created rows are pushed at the end,
 *  which makes searching them out from the end more efficient
 */
export const findLastIndexOfRowId = (rows, rowId) => {
  for (let index = rows.length - 1; index >= 0; index--) {
    let row = rows[index]
    if (row.row_id === rowId) {
      return index
    }
  }
  return -1
}

export const partitionModifiedRows = (rows, maxSavedId) => {
  /** Partition modified rows into newly added and updated */
  let newlyAddedRows = []
  let updatedRows = []
  for (let row of rows) {
    if (row.row_id > maxSavedId) {
      newlyAddedRows.push(row)
    } else {
      updatedRows.push(row)
    }
  }
  return { updatedRows, newlyAddedRows }
}

// https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications
export const fileSizeToHuman = (nBytes) => {
  const multiples = ['KB', 'MB', 'GB', 'TB']
  let result = ''
  for (let nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
    result = `${nApprox.toFixed(2)} ${multiples[nMultiple]}`
  }
  return result
}

export const disableColumns = (columns, disabled) => {
  if (!disabled) return columns
  return columns.map((column) => Object.assign({}, column, { disabled }))
}

/** Order helpers */
// Attributes present directly on the fact envelope
const factEnvelopeAttributes = ['order']

export const wrapOrderByField = (key) => {
  if (factEnvelopeAttributes.includes(key)) {
    return `\`${key}\``
  }

  return `\`value\`.\`${key}\``
}
