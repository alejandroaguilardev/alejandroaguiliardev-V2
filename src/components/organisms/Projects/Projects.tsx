import { Grid, Container } from "@mui/material"
import { TitleSection } from "../../atoms"
import { CardItem } from "../CardItem/CardItem"
import { IProjects } from "./IProjects"

export const Projects = ({ title, description, dataProjects }: IProjects) => {
    return (
        <Container maxWidth="lg" >
            <TitleSection
                title={title}
                description={[description]}
            />

            <Grid container spacing={5} >
                {dataProjects.map((data) => (
                    <Grid item xs={12} md={6} key={data.title}>
                        <CardItem
                            title={data.title}
                            subtitle={data.subtitle}
                            description={data.description}
                            icon={data.icon}
                            link={data.link}
                            repository={data.repository}
                            size='large'
                        />
                    </Grid>
                ))}
            </Grid>
        </Container >
    )
}
