import { Typography, List, ListItem, ListItemText, Divider, Box } from "@mui/material"
import { IListOption } from "./IListOption"

export const ListOption = ({ title, list }: IListOption) => {
    return (
        <>
            <Typography color='primary.contrastText' fontSize={16} fontWeight="bold">
                {title}
            </Typography>

            <List component="nav" aria-label="mailbox folders">
                {
                    list.map((data) => (
                        <Box key={data.title}>
                            <ListItem button>
                                <ListItemText primary={data.title} secondary={<Typography fontSize={13}>{data.secondary}</Typography>} sx={{ color: 'primary.contrastText' }} />
                            </ListItem>
                            <Divider light />
                        </Box>

                    ))
                }
            </List>
        </>
    )
}
