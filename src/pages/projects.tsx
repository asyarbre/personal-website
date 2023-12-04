import Project from '@/components/content/Projects/Project';
import { Seo } from '@/components/elements/Seo';
import Layout from '@/components/Layout/Layout';

export default function ProjectsPage() {
  return (
    <Layout>
      <Seo title='Projects' />
      <main>
        <Project />
      </main>
    </Layout>
  );
}
