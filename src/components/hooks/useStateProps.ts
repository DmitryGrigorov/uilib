import { SetStateAction, Dispatch, useState, useEffect } from "react";

export function useStateProps<T>(arg: T): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(arg);

  // Keep internal value in sync with the externally-controlled `arg` prop.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setValue(arg);
  }, [arg]);
  /* eslint-enable react-hooks/set-state-in-effect */

  return [value, setValue];
}
