import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useLocalStorageState } from "../../hooks";

interface ColorModeProviderProps {
  container: HTMLElement | null;
}

interface IColorModeContext {
  mode: string;
  toggleColorMode?: () => void;
}

const ColorModeContext = React.createContext<IColorModeContext>({
  mode: "dark",
});

export const useColorMode = () => {
  return useContext(ColorModeContext);
};

const ColorModeProvider: React.FC<ColorModeProviderProps> = ({
  children,
}) => {
  const [mode, setMode] = useLocalStorageState("mode", "dark");

  const toggleColorMode = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
  };

  useLayoutEffect(() => {
    if (mode === 'light') {
      document.documentElement.classList.add('dark');
    }
    else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  const value = {
    mode,
    toggleColorMode,
  };

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
