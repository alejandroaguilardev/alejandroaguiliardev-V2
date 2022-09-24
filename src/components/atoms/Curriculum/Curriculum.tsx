import { Button } from "@mui/material"
import { ICurriculum } from "./ICurriculum"

export const Curriculum = ({ fullWidth = false, sx }: ICurriculum) => {
    return (
        <Button variant="contained" fullWidth={fullWidth} sx={sx} >
            Get CV
        </Button>
    )
}
