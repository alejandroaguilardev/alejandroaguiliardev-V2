import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { IAppTheme } from "./IAppTheme";
import { useThemeContext } from "../context";
import { blueTheme } from "./blueTheme";
import { darkTheme } from "./darkTheme";

export const AppTheme = ({ children }: IAppTheme) => {
    const {theme} = useThemeContext();
    
    return (
        <ThemeProvider theme={theme.mode ? darkTheme: blueTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
