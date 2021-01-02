import React, { useContext, useEffect } from "react";
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
  container,
  children,
}) => {
  const [mode, setMode] = useLocalStorageState("mode", "dark");

  const toggleColorMode = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    container?.setAttribute("data-color-mode", nextMode);
    setMode(nextMode);
  };

  const value = {
    mode,
    toggleColorMode,
  };

  useEffect(() => {
    const appContainer = document.querySelector(".appContainer");
    appContainer?.setAttribute("data-color-mode", mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
