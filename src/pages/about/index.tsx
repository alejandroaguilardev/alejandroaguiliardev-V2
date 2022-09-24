import type { NextPage } from 'next'
import { Navbar } from '../../components/organisms';
import { AppLayout } from '../../components/templates';

const About: NextPage = () => {
  return (
    <AppLayout
      title='Alejandro Aguilar - Software Developer'
      description='Hello. I am Alejandro, a passionate software developer who works mainly in web development, creating web applications'
      page='/'
    >
    </AppLayout>
  )
}

export default About;
