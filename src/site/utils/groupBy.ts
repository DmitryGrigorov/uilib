export type TGroup<A> = {
  title: string;
  groupValue: TGroupByReturn<A>;
};

export type TGroupByReturn<A> = (TGroup<A> | A)[];

export const groupBy = <A extends object>(
  arr: Array<A>,
  key: string
): TGroupByReturn<A> =>
  arr.reduce((result: TGroupByReturn<A>, x) => {
    const xValue = (x as Record<string, unknown>)[key];
    const index = result.findIndex(
      (value) => "title" in value && value.title === xValue
    );
    if (index !== -1 && "groupValue" in result[index]) {
      (result[index] as TGroup<A>).groupValue.push(x);
    } else if (xValue) {
      result.push({ title: xValue as string, groupValue: [x] });
    } else {
      result.push(x);
    }
    return result;
  }, []);
