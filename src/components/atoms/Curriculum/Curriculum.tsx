import { Button } from "@mui/material"
import { ICurriculum } from "./ICurriculum"

export const Curriculum = ({ text = 'Get CV', fullWidth = false, sx }: ICurriculum) => {
    return (
        <a
            href="https://drive.google.com/file/d/13xkWuHrDCPpXNNkmPCKqC0BOH6n9nxmo/view?usp=sharing"
            target="_blank" rel="”noopener noreferrer">

            <Button variant="contained" fullWidth={fullWidth} sx={sx} >
                {text}
            </Button>
        </a>
    )
}
