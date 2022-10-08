import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { IAppTheme } from "./IAppTheme";
import { useThemeContext } from "../context";
import { blueTheme } from "./blueTheme";
import { darkTheme } from "./darkTheme";
import { useMemo } from "react";

export const AppTheme = ({ children }: IAppTheme) => {
	const { theme } = useThemeContext();

	const themeSelected = useMemo(
		() => (theme.mode === "dark" ? darkTheme : blueTheme),
		[theme]
	);

	return (
		<ThemeProvider theme={themeSelected}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};
