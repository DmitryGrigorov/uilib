import { RefCallback, useMemo, MutableRefObject, ForwardedRef } from "react";

const useForkRef = <T>(
  refs: (
    | RefCallback<T | null>
    | MutableRefObject<T | null>
    | ForwardedRef<T | null>
    | undefined
  )[]
): RefCallback<T> | null =>
  useMemo(() => {
    if (refs.length < 1) {
      return null;
    }
    return (refValue) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(refValue);
        } else if (ref) {
          ref.current = refValue;
        }
      });
    };
  }, [refs]);

export default useForkRef;
