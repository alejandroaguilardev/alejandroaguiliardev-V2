import { Grid, Container } from "@mui/material"
import { TitleSection } from "../../atoms"
import { CardItem } from "../CardItem/CardItem"
import { ISkills } from "./ISkills"

export const Skills = ({ title, description, dataSkills }: ISkills) => {
    return (
        <Container maxWidth="lg" >
            <TitleSection
                title={title}
                description={[description]}
            />

            <Grid container spacing={5} >
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
