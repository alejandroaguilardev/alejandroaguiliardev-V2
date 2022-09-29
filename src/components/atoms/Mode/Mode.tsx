import { IconButton } from "@mui/material"
import { ToggleOn, ToggleOff, LightMode, DarkMode } from '@mui/icons-material';
import { useThemeContext } from "../../../context";
import { useEffect } from "react";


export const Mode = () => {
    const { theme, handleTheme } = useThemeContext();

    useEffect(() => {
        handleTheme(localStorage.getItem('mode') ?? 'light');
    }, [])

    return (
        <IconButton
            onClick={() => {
                handleTheme(theme.mode === 'dark' ? 'light' : 'dark');
                localStorage.setItem('mode', theme.mode === 'dark' ? 'light' : 'dark')
            }}
            sx={{ fontSize: "1rem" }}
        >
            {theme.mode === 'dark' ?
                <>
                    <DarkMode />
                    <ToggleOn sx={{ fontSize: "3rem", color: 'primary.main' }} />
                </>
                :
                <>
                    <LightMode />
                    <ToggleOff sx={{ fontSize: "3rem" }} />
                </>
            }
        </IconButton >
    )
}
