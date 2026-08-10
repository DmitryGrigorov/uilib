export const dateMask = Date;

export const dateRangeMask = "from / to";

export const dateRangeBlocksMask = {
  from: {
    mask: Date
  },
  to: {
    mask: Date
  }
};

export const datePattern =
  /^(0?[1-9]|[12]\d|3[01])[./](0?[1-9]|1[0-2])[./-]\d{4}$/;

export const numericPattern = /^\d+$/;

export const ErrorRangeDateMsg = "Invalid date range";
export const ErrorIsRequiredMsg = "A date selection is required";

export const ErrorValidateDateMsg = "The entered date is invalid";

export const DateStartPlaceholder = "__.__.____";
export const DateEndPlaceholder = " / __.__.____";
export const PlaceholderChar = "_";
export const MaxDateTemplate = [31, 12, 9999];
