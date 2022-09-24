import { Grid, Container } from "@mui/material"
import { TitleSection } from "../../atoms"
import { CardItem } from "../../molecules"
import { dataSkills } from "./dataSkills"

export const Skills = () => {
    return (
        <Container maxWidth="lg" sx={{ mb: 4 }}>
            <TitleSection
                title="Technical Skills"
                description="Programming languages, framework and technologies with better performance."
            />

            <Grid container spacing={5} mt={2} mb={4}>
                {dataSkills.map((data) => (
                    <Grid item xs={6} md={3} key={data.title}>
                        <CardItem
                            title={data.title}
                            subtitle={data.subtitle}
                            description={data.description}
                            icon={data.icon}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container >
    )
}
