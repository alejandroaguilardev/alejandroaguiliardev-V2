import { NextPage } from "next";
import { Section } from "../../components/atoms";
import { Projects } from "../../components/organisms";
import { AppLayout } from "../../components/templates";
import { dataProjectType } from "../../data/dataProjects";

const ProjectsPage: NextPage = () => {
    return (
        <>
            <AppLayout
                title='Projects'
                description='Some of the projects carried out and in which I participated'
                page='/projects'
            >
                <Section>
                    <Projects
                        title="Some Projects Front End"
                        description={'Front end projects and practices of my public intellectual  property'}
                        dataProjects={dataProjectType("front")}
                    />
                </Section>

                <Section>
                    <Projects
                        title="Some Projects Back End"
                        description={'Back End projects and practices  my public intellectual property'}
                        dataProjects={dataProjectType("backend")}
                    />
                </Section>
            </AppLayout >
        </>
    )
}

export default ProjectsPage;
