import { useEffect, useState } from 'react';

export type WindowSize = {
  windowHeight: number;
  windowWidth: number;
};

function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    windowHeight: typeof window === 'undefined' ? 0 : window.innerHeight,
    windowWidth: typeof window === 'undefined' ? 0 : window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
