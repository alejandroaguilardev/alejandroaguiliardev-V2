import Link from "next/link"
import { Grid, Collapse } from "@mui/material"
import { Curriculum, PageRoute } from "../../atoms"
import { IMenuResponsive } from "./IMenuResponsive"

export const MenuResponsive = ({ pages, menu }: IMenuResponsive) => {
    return (
        <Collapse in={menu} sx={{ flexDirection: 'column', display: { xs: 'flex', md: 'none' } }} >
            <Grid sx={{ mt: 2, mb: 1 }}>
                {pages.map((page: string) => (
                    <PageRoute 
                        page={page} 
                        key={page}
                        sx={{ 
                            p: 3, 
                            borderTop: '1px  solid #999' 
                        }}
                    />
                ))}
                <Curriculum fullWidth={true} />
            </Grid>
        </Collapse >
    )
}
