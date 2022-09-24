import { Card } from "@mui/material"
import { CardContent } from "../../atoms"
import { ICardItem } from "./ICardItem"

export const CardItem = ({ title, subtitle, description, icon, size = 'small' }: ICardItem) => {
    return (
        <Card
            sx={{
                alignItems: 'center',
                backgroundColor: 'background.paper',
                boxShadow: '1px 1px 30px #ddd',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: `${size === "small" ? "15rem" : "22rem"}`,
                py: 2,
                px: 2,
                transition: '.7s  all ',
                "&:hover": {
                    backgroundColor: `${size === 'small' ? 'primary.main' : 'background.paper'}`,
                    color: `${size === 'small' ? 'primary.contrastText' : 'inherit'}`,
                    transform: 'translate(0,-5px)'
                }
            }}>
            <CardContent
                title={title}
                subtitle={subtitle}
                description={description}
                icon={icon}
                size={size}
            />
        </Card>
    )
}
