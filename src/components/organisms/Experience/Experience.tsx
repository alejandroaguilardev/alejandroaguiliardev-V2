import { Grid, Container } from "@mui/material"
import { TitleSection } from "../../atoms"
import { CardItem } from "../../molecules"
import { dataExperience } from "./dataExperience"

export const Experience = () => {
    return (
        <Container maxWidth="lg" sx={{ mb: 4 }}>
            <TitleSection
                title="My Work Experience"
                description="Featured companies which I have worked in my career as a developer."
            />

            <Grid container spacing={5} mt={2} mb={4}>
                {dataExperience.map((data) => (
                    <Grid item xs={12} md={4} key={data.title}>
                        <CardItem
                            title={data.title}
                            subtitle={data.subtitle}
                            description={data.description}
                            icon={data.icon}
                            size='large'
                        />
                    </Grid>
                ))}
            </Grid>
        </Container >
    )
}
