import { useCallback, useEffect, useState } from "react";

function useWindowSize() {
  const isClient = typeof window === "object";
  const getSize = useCallback(() => {
    if (!isClient) {
      return {
        windowHeight: 0,
        windowWidth: 0,
      };
    }

    const { innerHeight, innerWidth } = window;

    return {
      windowHeight: innerHeight,
      windowWidth: innerWidth,
    };
  }, [isClient]);
  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [getSize, isClient]);

  return windowSize;
}

export default useWindowSize;
