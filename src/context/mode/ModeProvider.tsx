import { useEffect, useReducer } from "react";
import { IModeProvider } from "./IMode";
import { INIT } from "./init";
import { ModeContext } from "./ModeContext";
import { ModeReducer } from "./ModeReducer";

export const ModeProvider = ({ children }: IModeProvider) => {
	const [theme, dispatch] = useReducer(ModeReducer, INIT);

	const handleTheme = (mode: string) => {
		dispatch({
			type: "changeMode",
			payload: { mode },
		});
	};

	useEffect(() => {
		handleTheme(localStorage.getItem("mode") ?? "light");
	}, []);

	return (
		<ModeContext.Provider value={{ theme, handleTheme }}>
			{children}
		</ModeContext.Provider>
	);
};
