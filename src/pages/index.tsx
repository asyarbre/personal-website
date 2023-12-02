import FeaturedProjects from '@/components/content/Home/FeaturedProjects';
import HomePage from '@/components/content/Home/Home';
import Skills from '@/components/content/Home/Skills';
import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <main>
        <HomePage />
        <FeaturedProjects />
        <Skills />
      </main>
    </Layout>
  );
}
