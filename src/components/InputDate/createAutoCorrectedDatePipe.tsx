const maxValueMonth = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const formatOrder = ["yyyy", "yy", "mm", "dd", "HH", "MM", "SS"];

type TDateFormatPart = "dd" | "mm" | "yy" | "yyyy" | "HH" | "MM" | "SS";

export default function createAutoCorrectedDatePipe(
  dateFormat = "mm dd yyyy",
  { minYear = 1, maxYear = 9999 } = {}
): any {
  const dateFormatArray = dateFormat
    .split(/[^HMSdmy]+/)
    .sort((a, b) => formatOrder.indexOf(a) - formatOrder.indexOf(b));
  return (conformedValue: string) => {
    const indexesOfPipedChars: number[] = [];
    const maxValue = {
      dd: 31,
      mm: 12,
      yy: 99,
      yyyy: maxYear,
      HH: 23,
      MM: 59,
      SS: 59
    };
    const minValue = {
      dd: 1,
      mm: 1,
      yy: 0,
      yyyy: minYear,
      HH: 0,
      MM: 0,
      SS: 0
    };
    const conformedValueArr = conformedValue.split("");

    // Check first digit
    dateFormatArray.forEach((format) => {
      const position = dateFormat.indexOf(format);
      const maxFirstDigit = parseInt(
        maxValue[format as TDateFormatPart].toString().substr(0, 1),
        10
      );

      if (parseInt(conformedValueArr[position], 10) > maxFirstDigit) {
        conformedValueArr[position + 1] = conformedValueArr[position];
        conformedValueArr[position] = String(0);
        indexesOfPipedChars.push(position);
      }
    });

    // Check for invalid date
    let month = 0;
    const isInvalid = dateFormatArray.some((format) => {
      const position = dateFormat.indexOf(format);
      const length = format.length;
      const textValue = conformedValue
        .substr(position, length)
        .replace(/\D/g, "");
      const value = parseInt(textValue, 10);
      if (format === "mm") {
        month = value || 0;
      }
      const maxValueForFormat =
        format === "dd"
          ? maxValueMonth[month]
          : maxValue[format as TDateFormatPart];
      if (format === "yyyy" && (minYear !== 1 || maxYear !== 9999)) {
        const scopedMaxValue = parseInt(
          maxValue[format as TDateFormatPart]
            .toString()
            .substring(0, textValue.length),
          10
        );
        const scopedMinValue = parseInt(
          minValue[format as TDateFormatPart]
            .toString()
            .substring(0, textValue.length),
          10
        );
        return value < scopedMinValue || value > scopedMaxValue;
      }
      return (
        value > maxValueForFormat ||
        (textValue.length === length &&
          value < minValue[format as TDateFormatPart])
      );
    });

    if (isInvalid) {
      return false;
    }

    return {
      value: conformedValueArr.join(""),
      indexesOfPipedChars
    };
  };
}
