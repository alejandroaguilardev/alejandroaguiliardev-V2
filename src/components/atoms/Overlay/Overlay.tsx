import { Box } from "@mui/material"
import { IOverlay } from "./IOverlay"

export const Overlay = ({ children }: IOverlay) => {
    return (
        <Box
            sx={{
                alignItems: "center",
                bottom: 0,
                display: "flex",
                justifyContent: "center",
                left: 0,
                gap:4,
                position: "absolute",
                opacity:0,
                top: 0,
                right: 0,
                transition: '1s all',
                "&:hover": {
                    backgroundColor: "rgba(0,0,0,.7)",
                    opacity:1,
                }
            }}>
            {children}
        </Box>
    )
}
