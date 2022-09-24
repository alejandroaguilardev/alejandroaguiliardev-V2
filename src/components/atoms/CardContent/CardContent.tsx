import Image from "next/image"
import { Box, Typography } from "@mui/material"
import { ICardContent } from './ICardContent'

export const CardContent = ({ title, subtitle, description, icon, size = 'small' }: ICardContent) => {
    return (
        <>
            <Box sx={{ py: 1 }}>
                <Image
                    src={icon}
                    width={size === "small" ? 70 : 100}
                    height={size === "small" ? 70 : 100}
                    alt={title}
                />
            </Box>
            <Typography align='center' variant='h3' sx={{ fontSize: "1rem", fontWeight: 'bold', mb: 1 }}>
                {title}
            </Typography>
            <Typography align='center' sx={{ fontSize: ".9rem" }}>
                {subtitle}
            </Typography>

            <Typography align='center' sx={{ fontSize: ".7rem" }}>
                {description}
            </Typography>
        </>
    )
}
