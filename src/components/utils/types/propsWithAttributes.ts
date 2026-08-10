import { PropsWithoutRef } from "react";

export type TPropsWithAttributes<
  Props,
  As extends keyof JSX.IntrinsicElements = "div"
> = Props &
  PropsWithoutRef<Omit<JSX.IntrinsicElements[As], keyof Props | "children">>;
