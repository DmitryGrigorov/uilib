const calculatePaddingLeftRight = (size: string): number => {
  switch (size) {
    case "l":
    case "m":
      return 12;
    case "xs":
      return 4;
    default:
      return 8;
  }
};

export const getWithBlock = (
  block: HTMLElement,
  isIcon = false,
  size: string
): number => {
  const iconWidth = isIcon ? 16 + 8 : 0;
  const paddingLeftRight = calculatePaddingLeftRight(size);
  return block.offsetWidth - iconWidth - paddingLeftRight;
};
