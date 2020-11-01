import { useEffect, useLayoutEffect, useState } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

export function useRefHeight(ref = null) {
  const [height, setHeight] = useState(0);

  useIsomorphicLayoutEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);

      function updateHeight() {
        setHeight(ref.current.offsetHeight);
      }

      // recalculate height of each job post when window is resized.
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, [height, ref, setHeight]);

  return height;
}
