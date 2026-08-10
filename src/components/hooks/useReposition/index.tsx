import { useEffect } from "react";

export const useReposition = (onRequestReposition: () => void): void => {
  useEffect(() => {
    window.addEventListener("resize", onRequestReposition);

    return () => {
      window.removeEventListener("resize", onRequestReposition);
    };
  });
};
