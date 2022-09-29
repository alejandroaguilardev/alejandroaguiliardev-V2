import { Grid, Container, Box } from "@mui/material"
import { dataExperience } from "./dataExperience"
import { TitleSection } from "../../atoms"
import { CardItem } from "../CardItem/CardItem"

export const Experience = () => {
    return (
        <Container maxWidth="lg">
            <TitleSection
                title="My Work Experience"
                description={["Featured companies which I have worked in my career as a developer."]}
            />

            <Grid container spacing={5} mt={2}>
                {dataExperience.map((data) => (
                    <Grid item xs={12} md={4} key={data.title}>
                        <CardItem
                            title={data.title}
                            subtitle={data.subtitle}
                            description={data.description}
                            icon={data.icon}
                            size='medium'
                        />
                    </Grid>
                ))}
            </Grid>
        </Container >
    )
}
