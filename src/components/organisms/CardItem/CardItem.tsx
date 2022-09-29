import { Card } from "@mui/material";
import { useThemeContext } from "../../../context";
import { CardContent } from "../../molecules";
import { ICardItem } from "./ICardItem";

export const CardItem = ({
    title,
    subtitle,
    description,
    icon,
    size = 'small',
    link = "",
    repository = ""
}: ICardItem) => {
    const { theme } = useThemeContext();

    return (
        <Card
            sx={{
                alignItems: "center",
                backgroundColor: 'background.paper',
                boxShadow: theme.mode === 'dark' ? '' : '1px 1px 30px #ddd',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: size === "large" ? "start" : "center",
                height: size === "small" ? "15rem" : "23rem",
                p: 0,
                m: 0,
                transition: '.7s  all',
                "&:hover": {
                    backgroundColor: size === 'small' ? 'primary.main' : 'background.paper',
                    color: size === 'small' ? 'primary.contrastText' : 'inherit',
                    transform: 'translate(0,-5px)'
                }
            }}>
            <CardContent
                title={title}
                subtitle={subtitle}
                description={description}
                icon={icon}
                size={size}
                link={link}
                repository={repository}
            />
        </Card>
    )
}
