import type { NextPage } from 'next'
import { Experience } from '../components/organisms';
import { AppLayout } from '../components/templates';
import { Hero } from '../components/atoms';
import { Skills } from '../components/organisms/Skills/Skills';

const Home: NextPage = () => {
  return (
    <AppLayout
      title='Alejandro Aguilar - Software Developer'
      description='Hello. I am Alejandro, a passionate software developer who works mainly in web development, creating web applications'
      page='/'
    >
      <Hero />
      <Experience />
      <Skills />
    </AppLayout>
  )
}

export default Home;
