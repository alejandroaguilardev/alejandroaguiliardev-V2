import type { NextPage } from 'next'
import { Section } from '../../components/atoms';
import { Skills } from '../../components/organisms';
import { AppLayout } from '../../components/templates';
import { dataSkillsPage } from '../../data/dataSkillsPage';

const SkillsPage: NextPage = () => {
  return (
    <AppLayout
      title='Technical skills and knowledge'
      description='My technical skills in the field of software development'
      page='/skills'
    >
      {
        dataSkillsPage.map((data, index) => (
          <Section key={index}>
            <Skills
              title={data.title}
              description={data.description}
              dataSkills={data.dataSkills}
            />
          </Section>
        ))
      }
    </AppLayout>
  )
}

export default SkillsPage;
