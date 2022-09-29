import { Box } from "@mui/material"
import { ISection } from "./ISection"

export const Section = ({ children }: ISection) => {
    return (
        <Box sx={{ my: 20 }}>
            {children}
        </Box>
    )
}
