import { NextSeo } from 'next-seo';

import Project from '@/components/content/Projects/Project';
import Layout from '@/components/Layout/Layout';

export default function ProjectsPage() {
  return (
    <>
      <NextSeo title={`Projects - Asya'ri`} />
      <Layout>
        <main>
          <Project />
        </main>
      </Layout>
    </>
  );
}
