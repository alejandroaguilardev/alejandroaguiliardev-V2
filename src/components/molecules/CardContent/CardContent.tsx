import { Box, Typography } from "@mui/material"
import { CardImage } from "../CardImage/CardImage"
import { ICardContent } from './ICardContent'

export const CardContent = ({
    title,
    subtitle,
    description,
    icon,
    size = 'small',
    link = "",
    repository = ""
}: ICardContent) => {
    return (
        <>
            <CardImage
                title={title}
                icon={icon}
                size={size}
                link={link}
                repository={repository}
            />
            <Box px={2}>
                <Typography align='center' variant='h3' sx={{ fontSize: "1rem", fontWeight: 'bold', mb: 1 }}>
                    {title}
                </Typography>
                <Typography align='center' sx={{ fontSize: ".9rem" }}>
                    {subtitle}
                </Typography>

                <Typography align='center' sx={{ fontSize: ".7rem" }}>
                    {description}
                </Typography>
            </Box>
        </>
    )
}
