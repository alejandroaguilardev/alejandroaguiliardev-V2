import { Typography } from "@mui/material"
import { ITitleSection } from "./ITitleSection"

export const TitleSection = ({ title, description }: ITitleSection) => {
    return (
        <>
            <Typography
                variant="h2"
                align='center'
                sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                }}>
                {title}
            </Typography>
            <Typography align='center'>  {description}  </Typography>
        </>
    )
}
