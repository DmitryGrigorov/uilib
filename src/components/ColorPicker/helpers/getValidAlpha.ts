export const getValidAlpha = (alpha: string): string => {
  let _alpha = Number(alpha.replace("%", ""));
  if (_alpha > 100) {
    _alpha = 100;
  }
  if (_alpha < 0) {
    _alpha = 0;
  }
  if (isNaN(_alpha)) {
    _alpha = 100;
  }
  return _alpha + "%";
};
