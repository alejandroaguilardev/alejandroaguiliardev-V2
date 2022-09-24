import { AppBar, List } from "@mui/material"
import { SocialNetworks } from "../../molecules";


export const ContainerSocialNetworks = () => {
    return (
        <AppBar sx={{
            backgroundColor: 'transparent',
            left: "calc(100% - 2.5rem)",
            m: 0,
            p: 0,
            position: "fixed",
            top: "45%",
            width: "15rem",
            zIndex: "10",
        }}>
            <List sx={{
                backgroundColor: 'transparent',
                m: 0,
                p: 0,
            }}>
                <SocialNetworks />
            </List>
        </AppBar>

    )
}