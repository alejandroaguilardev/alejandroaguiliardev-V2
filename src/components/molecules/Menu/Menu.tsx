import { Toolbar, Box, IconButton } from "@mui/material"
import { Menu as MenuIcon } from '@mui/icons-material';
import { Curriculum, Logotype, Mode, PageRoute } from "../../atoms"
import { IMenu } from "./IMenu";

export const Menu = ({ pages, menu, setMenu }: IMenu) => {

    return (
        <Toolbar
            disableGutters
            sx={{ display: 'flex', justifyContent: 'space-between', mt: { xs: 1, sm: 0.5 }, mb: { xs: 0.5, sm: 0 } }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Logotype />
                <Mode />
            </Box>
            <Box sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',
                gap: '2rem',
            }}>
                {pages.map((page: string) => (
                    <PageRoute page={page} key={page} />
                ))}
                <Curriculum sx={{ pl: 8, pr: 8 }} />
            </Box>
            <Box sx={{
                display: { xs: 'block', sm: 'none' },

            }}>
                <IconButton onClick={() => setMenu(!menu)}>
                    <MenuIcon />
                </IconButton>
            </Box>
        </Toolbar >
    )
}
