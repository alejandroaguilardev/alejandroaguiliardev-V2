import { IMyButton } from "./IMyButton"
import { Button, Typography } from "@mui/material"

export const MyButton = ({ text }: IMyButton) => {
    return (
        <Button
            sx={{
                backgroundColor: 'primary.main',
                color: '#fff',
                py: 1,
                px: 2,
                textTransform: 'capitalize',
                transition: ".5s backgroundColor",
                "&:hover": {
                    backgroundColor: 'secondary.main',
                }
            }}
        >
            <Typography sx={{ fontSize: ".7rem"}}>{text}</Typography>
        </Button>
    )
}
