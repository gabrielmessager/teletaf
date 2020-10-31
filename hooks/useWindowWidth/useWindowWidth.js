import { useEffect, useState } from "react";

export function useWindowWidth(initialWidth = 0) {
  const [width, setWidth] = useState({
    windowWidth: process.browser ? window.innerWidth : initialWidth,
  });

  useEffect(() => {
    function getWidth() {
      return {
        windowWidth: process.browser ? window.innerWidth : initialWidth,
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
