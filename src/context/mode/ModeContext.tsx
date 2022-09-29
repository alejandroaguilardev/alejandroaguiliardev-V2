import { createContext } from "react";

const INIT = {
	theme: { mode: 'light' },
	handleTheme: () => { false }
};

export const ModeContext = createContext<any>(INIT);
