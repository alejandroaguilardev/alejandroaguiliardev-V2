import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { IAppTheme } from "./IAppTheme";
import { blueTheme } from "./blueTheme";

export const AppTheme = ({ children }: IAppTheme) => {
    return (
        <ThemeProvider theme={blueTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
