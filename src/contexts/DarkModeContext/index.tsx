import React, { createContext, FC, useMemo } from 'react';
import useDarkMode, { DarkMode } from 'use-dark-mode';

const defaultValue: DarkMode = {
  disable: () => { },
  enable: () => { },
  toggle: () => { },
  value: true,
};

const { Consumer, Provider } = createContext(defaultValue);

const DarkModeProvider: FC = ({ children }) => {
  const value = useMemo(() => {
    const { value: value2 } = defaultValue;

    return value2;
  }, []);
  const darkMode = useDarkMode(value);

  return <Provider value={darkMode}>{children}</Provider>;
};

export default { Consumer, Provider: DarkModeProvider };
