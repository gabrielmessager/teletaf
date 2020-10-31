import { useEffect, useLayoutEffect, useState } from "react";

export function useRefHeight(ref = null) {
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
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
