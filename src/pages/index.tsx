import type { NextPage } from 'next'
import { Experience, Projects, Skills } from '../components/organisms';
import { AppLayout } from '../components/templates';
import { Hero, Section } from '../components/atoms';
import { dataSkillsPriority } from '../data/dataSkills';
import { dataProjectPriority } from '../data/dataProjects';

const Home: NextPage = () => {
  return (
    <AppLayout
      title='Alejandro Aguilar - Software Developer'
      description='Hello. I am Alejandro, a passionate software developer who works mainly in web development, creating web applications'
      page='/'
    >
      <Hero />

      <Section>
        <Experience />
      </Section>

      <Section>
        <Skills
          title="Technical Skills"
          description="Programming languages, framework and technologies with better performance."
          dataSkills={dataSkillsPriority(1)}
        />
      </Section>

      <Section>
        <Projects
          title="Some Projects "
          description={'Some projects and practices of my public intellectual property'}
          dataProjects={dataProjectPriority(1)}
        />
      </Section>

    </AppLayout>
  )
}

export default Home;
