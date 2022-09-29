import { IconButton } from "@mui/material"
import { ToggleOn, ToggleOff, LightMode, DarkMode } from '@mui/icons-material';
import { useThemeContext } from "../../../context";


export const Mode = () => {
    const { theme, handleTheme } = useThemeContext();

    return (
        <IconButton onClick={() => handleTheme(!theme.mode)} sx={{ fontSize: "1rem" }}>
            {theme.mode ?
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
