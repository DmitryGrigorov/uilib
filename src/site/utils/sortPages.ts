const sort = (
  a: { order?: number; title: string },
  b: { order?: number; title: string }
): number => {
  if (a.order && b.order) {
    return a.order - b.order;
  }
  if (a.order) {
    return -1;
  }
  if (b.order) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
};

export const sortPages = <P extends { order?: number; title: string }>(
  pages: P[]
): P[] => pages.sort(sort);
