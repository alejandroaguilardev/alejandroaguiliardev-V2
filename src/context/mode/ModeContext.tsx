import { createContext } from "react";

const INIT = {
	theme: { mode: false },
	handleTheme: () => { false }
};

export const ModeContext = createContext<any>(INIT);
