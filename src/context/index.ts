import { useContext } from "react";
import { ModeContext } from "./mode/ModeContext";

export const useThemeContext = () => useContext(ModeContext);