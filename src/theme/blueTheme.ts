import { createTheme } from "@mui/material";

export const blueTheme = createTheme({
	palette: {
		primary: {
			main: "#0052B4",
			light: "#424242",
			dark: "#09162e",
			contrastText: "#fff",
		},
		secondary: {
			main: "#2946F7",
			// main: "#023F89",
		},
		background: {
			default: "#fbfcfc",
			paper: "#fff",
		},
		text: {
			primary: "#222",
			secondary: "#444",
		},
	},
});
