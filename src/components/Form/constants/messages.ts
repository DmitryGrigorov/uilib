const typeTemplate = "${name} is not a valid ${type}";

export const defaultValidateMessages = {
  default: "Validation failed for '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be blank",
  date: {
    format: "'${name}' has an invalid date format",
    parse: "'${name}' could not be parsed as a date",
    invalid: "'${name}' is not a valid date",
    minDate: "'${name}' is earlier than the minimum date",
    maxDate: "'${name}' is later than the maximum date",
    range: "'${name}' contains an invalid date range"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters long",
    min: "'${name}' must be at least ${min} characters long",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters long"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must contain exactly ${len} items",
    min: "'${name}' must contain at least ${min} items",
    max: "'${name}' cannot contain more than ${max} items",
    range: "'${name}' must contain between ${min} and ${max} items"
  },
  pattern: {
    mismatch: "'${name}' does not match the pattern ${pattern}"
  }
};
