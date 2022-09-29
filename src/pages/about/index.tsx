import type { NextPage } from 'next'
import { Box } from '@mui/material';
import { AppLayout } from '../../components/templates';
import { About, Education, Experience } from '../../components/organisms';
import { Curriculum, Section } from '../../components/atoms';

const AboutPage: NextPage = () => {
  return (
    <>
      <AppLayout
        title='Alejandro Aguilar - Software Developer'
        description='About me and my experience in the field of information technology and my academic background'
        page='/about'
      >
        <Section>
          <About />
        </Section>

        <Section>
          <Experience />
          <Box
            mt={4}
            sx={{
              alignItems: "center",
              display: "flex",
              justifyContent: 'center'
            }}
          >
            <Curriculum text="See More" />
          </Box>
        </Section>

        <Section>
          <Education />
        </Section>

      </AppLayout >
    </>
  )
}

export default AboutPage;
