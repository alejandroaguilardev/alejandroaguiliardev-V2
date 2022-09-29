import { useRouter } from "next/router"
import { Typography, List, ListItem, ListItemText, Divider, Box } from "@mui/material"
import { IListOption } from "./IListOption"

export const ListOption = ({ title, list }: IListOption) => {
    const router = useRouter();
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
                                {data?.type === 'link' ?
                                    <ListItemText
                                        onClick={() => router.push(`${data.title.replaceAll(" ", "-").toLowerCase()}`)}
                                        primary={data.title}
                                        secondary={<Typography fontSize={13}>{data.secondary}</Typography>}
                                        sx={{ color: 'primary.contrastText' }}
                                    />
                                    :
                                    <ListItemText primary={data.title} secondary={<Typography fontSize={13}>{data.secondary}</Typography>} sx={{ color: 'primary.contrastText' }} />
                                }
                            </ListItem>
                            <Divider light />
                        </Box>

                    ))
                }
            </List>
        </>
    )
}
