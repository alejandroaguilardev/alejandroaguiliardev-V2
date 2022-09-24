import { Typography, Grid, Container } from "@mui/material"

export const Copyright = () => {
    return (
        <Grid py={4} sx={{ borderTopWidth: '.1rem', borderTopColor: 'primary.main', borderTopStyle: 'solid' }}>
            <Container maxWidth='lg'>
                <Typography color='primary.contrastText' fontSize={12}>
                    © 2020 - 2022 All rights reserved  | Alejandro Aguilar Systems Engineer | Software Developer
                </Typography>
            </Container>
        </Grid>
    )
}
