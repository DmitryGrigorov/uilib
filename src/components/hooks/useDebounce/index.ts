import { useCallback, useEffect, useRef } from "react";

type TUseDebounce = <T extends (...args: any) => void>(
  func: T,
  wait?: number
) => (...args: Parameters<T>) => void;

const useDebounce: TUseDebounce = (func, wait = 0) => {
  type Func = typeof func;

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(
    () => () => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
    },
    [wait]
  );

  return useCallback(
    (...args: Parameters<Func>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        if (typeof func === "function") {
          func(...args);
        }
      }, wait);
    },
    [wait, func]
  );
};

export default useDebounce;
