import { useCallback, useEffect, useState } from "react";

export function useWindowWidth(initialWidth = 0) {
  console.log("window", window);
  const [width, setWidth] = useState({
    windowWidth: process.browser ? window.innerWidth : initialWidth,
    // windowWidth: process.browser ? window?.screen?.width : initialWidth,
  });

  useEffect(() => {
    function getWidth() {
      return {
        windowWidth: process.browser ? window.innerWidth : initialWidth,
        // windowWidth: process.browser ? window?.screen?.width : initialWidth,
      };
    }

    function handleResize() {
      setWidth(getWidth());
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
