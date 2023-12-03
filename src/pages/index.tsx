import FeaturedProjects from '@/components/content/Home/FeaturedProjects';
import Home from '@/components/content/Home/Home';
import Skills from '@/components/content/Home/Skills';
import Layout from '@/components/Layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <main>
        <Home />
        <FeaturedProjects />
        <Skills />
      </main>
    </Layout>
  );
}
