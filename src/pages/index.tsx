import FeaturedProjects from '@/components/content/Home/FeaturedProjects';
import Home from '@/components/content/Home/Home';
import Skills from '@/components/content/Home/Skills';
import { Seo } from '@/components/elements/Seo';
import Layout from '@/components/Layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <Home />
        <FeaturedProjects />
        <Skills />
      </main>
    </Layout>
  );
}
