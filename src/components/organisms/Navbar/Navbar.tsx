import { useState } from "react";
import { AppBar, Container } from "@mui/material"
import { Menu, MenuResponsive } from "../../molecules";

const pages = ['About', 'Skills', 'Projects'];
export const Navbar = () => {
    const [menu, setMenu] = useState(false);

    return (
        <AppBar position="sticky" sx={{ background: '#fff', color: '#343a40' }}>
            <Container maxWidth="lg">
                <Menu pages={pages} menu={menu} setMenu={setMenu} />
                <MenuResponsive pages={pages} menu={menu} />
            </Container>
        </AppBar>
    );
};

