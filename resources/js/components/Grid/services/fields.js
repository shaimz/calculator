export const castValue = (value, displayType) => {
  switch (displayType) {
    case 'integer':
      return parseInt(value)

    case 'number':
      return parseFloat(value)

    case 'decimal(2)':
      return parseFloat(value).toFixed(2)

    case 'decimal(4)':
      return parseFloat(value).toFixed(4)

    default:
      return value
  }
}

export const missingValue = (value, displayType) => {
  switch (displayType) {
    case 'integer':
    case 'number':
    case 'decimal(2)':
    case 'decimal(4)':
      return isNaN(value)

    default:
      return value === undefined || value === null || value === ''
  }
}

export const validateRange = (value, lowerRange, upperRange) => {
  lowerRange = parseFloat(lowerRange)
  upperRange = parseFloat(upperRange)

  return (
    (isNaN(lowerRange) || value >= lowerRange) &&
    (isNaN(upperRange) || value <= upperRange)
  )
}

export const validateNumberType = (value, definition) => {
  let validation = definition.validation || {}
  let { min, max } = validation
  if (!validateRange(value, min, max)) {
    return {
      valid: false,
      error: {
        type: 'invalid_range',
        column: definition.name,
        min,
        max
      }
    }
  }

  return { valid: true }
}

export const validateTextInputType = (value, definition) => {
  let validation = definition.validation || {}
  const maxInputLength = Number(validation.size)
  value = value || ''

  if (!isNaN(maxInputLength) && maxInputLength > 0 && value.length > maxInputLength) {
    return {
      valid: false,
      error: {
        type: 'invalid_input_length',
        column: definition.name,
        max: maxInputLength
      }
    }
  }

  return { valid: true }
}

export const validateDecimal = (value, decimal) => {
  if (!value.length) return { valid: true }
  let split = value.split('.')
  if (split.length <= 1) return { valid: true }

  if (split[1].length > decimal) {
    split[1] = split[1].slice(0, decimal)
    return {
      valid: false,
      parsed: split.join('.')
   }
  }
  return { valid: true }
}

export const validateDateType = (value, definition) => {
  value = value || ''
  if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) {
    return {
      valid: false,
      error: {
        type: 'invalid_date_format',
        column: definition.name
      }
    }
  }

  return { valid: true }
}

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
export const validateEmail = (email) => {
  if (!email) return false
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}

export const validate = (value, definition) => {
  let { display_type: displayType, validation, disabled } = definition
  if (disabled) return { valid: true }
  validation = validation || { required: true }
  if (missingValue(value, displayType)) {
    if (validation.required) {
      return {
        valid: false,
        error: {
          type: 'missing_value',
          column: definition.name
        }
      }
    } else {
      return { valid: true }
    }
  }
  if (validation.isEmail) {
    if (!validateEmail(value)) {
      return {
        valid: false,
        error: {
          type: 'email_invalid',
          column: definition.name
        }
      }
    }
  }

  switch (displayType) {
    case 'integer':
    case 'number':
    case 'decimal(2)':
    case 'decimal(4)':
      return validateNumberType(value, definition)

    case 'input':
    case 'string':
    case 'text':
      return validateTextInputType(value, definition)

    case 'date':
      return validateDateType(value, definition)

    default:
      /** Unknown types are considered valid */
      return { valid: true }
  }
}

export const rowHasData = (row, columns) => {
  /** Check if any of the columns has data */
  for (let column of columns) {
    let value = row[column.name]
    if (!missingValue(value, column)) {
      return true
    }
  }
  return false
}

export const formatErrorMessage = (error) => {
  switch (error.type) {
    case 'missing_value':
      return `The <b>${error.column}</b> field is mandatory!`
    case 'email_invalid':
      return `The <b>${error.column}</b> field must be a valid email address!`

    case 'invalid_range':
      if (
        typeof error.min !== 'undefined' &&
        typeof error.max !== 'undefined'
      ) {
        return `The <b>${error.column}</b> must have a value between <b>${error.min}</b> and <b>${error.max}</b>`
      } else if (typeof error.min !== 'undefined') {
        return `The <b>${error.column}</b> must have a value over <b>${error.min}</b>`
      } else if (typeof error.max !== 'undefined') {
        return `The <b>${error.column}</b> must have a value under <b>${error.max}</b>`
      }
      return 'Invalid range'

    case 'invalid_input_length':
      return `The <b>${error.column}</b> field should be at most ${error.max} characters.`

    case 'invalid_date_format':
      return `The <b>${error.column}</b> has invalid format.`
  }
}
