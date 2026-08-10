export const getWithBlock = (block: HTMLElement, isIcon = false): number => {
  const iconWidth = isIcon ? 16 + 8 : 0;
  const paddingLeftRight = 32;
  return block.offsetWidth - iconWidth - paddingLeftRight;
};
