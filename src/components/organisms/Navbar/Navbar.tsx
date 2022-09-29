import { useState } from "react";
import { AppBar, Container } from "@mui/material"
import { Menu, MenuResponsive } from "../../molecules";
import { useThemeContext } from "../../../context";

const pages = ['About', 'Skills', 'Projects'];
export const Navbar = () => {
    const { theme } = useThemeContext();
    const [menu, setMenu] = useState(false);

    return (
        <AppBar position="sticky" 
            sx={{ 
                background: theme.mode ? '#222' : '#fff', 
                color:  theme.mode ? '#fff' : '#343a40'
            }}>
            <Container maxWidth="lg">
                <Menu pages={pages} menu={menu} setMenu={setMenu} />
                <MenuResponsive pages={pages} menu={menu} />
            </Container>
        </AppBar>
    );
};

