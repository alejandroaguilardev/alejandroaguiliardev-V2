import { Typography, Grid, Container, List } from "@mui/material"
import { Copyright, ListOption, Logotype } from "../../atoms"
import { SocialNetworks } from "../../molecules";
import { dataBriefcase, dataInformation } from "./dataFooter";

export const Footer = () => {
    return (
        <Grid sx={{ backgroundColor: 'primary.dark' }}>
            <Container maxWidth='lg'>
                <Grid container spacing={10} pt={3} pb={5}>
                    <Grid item md={6} >
                        <Logotype ligth={true} />
                        <Typography color='primary.contrastText' p={3} fontSize={14}>
                            Systems Engineer and software developer, passionate about technology and open to learning new technologies.
                        </Typography>
                        <List dense sx={{ display: 'flex', gap: '1.5rem' }}>
                            <SocialNetworks fab={true} />
                        </List>
                    </Grid>
                    <Grid item md={3}>
                        <ListOption title="Information" list={dataInformation} />
                    </Grid>
                    <Grid item md={3}>
                        <ListOption title="Briefcase" list={dataBriefcase} />
                    </Grid>
                </Grid>
            </Container >
            <Copyright />
        </Grid>
    )
}
