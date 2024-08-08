import { NextSeo } from 'next-seo';

import FeaturedProjects from '@/components/content/Home/FeaturedProjects';
import Home from '@/components/content/Home/Home';
import Skills from '@/components/content/Home/Skills';
import Layout from '@/components/Layout/Layout';

export default function HomePage() {
  return (
    <>
      <NextSeo title={`Asya'ri - Peronal Website`} />
      <Layout>
        <main>
          <Home />
          <FeaturedProjects />
          <Skills />
        </main>
      </Layout>
    </>
  );
}
