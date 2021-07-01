import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext";

export function useTheme(): ThemeContextType {
  const themeContext = useContext(ThemeContext);

  return themeContext;
}
