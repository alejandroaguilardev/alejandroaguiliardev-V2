import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
	palette: {
		// mode:'dark'
		primary: {
			main: "#0052B4",
			light: "#fff",
			dark: "#09162e",
			contrastText: "#fff",
		},
		secondary: {
			main: "#2946F7",
			// main: "#023F89",
		},
		background: {
			default: "#fbfcfc",
			paper:'#fff'
		},
		text: {
			primary: "#222",
			secondary: "#444",
			//   disabled: string;
		},
		error: {
			main: red.A400,
		},
	},
});
