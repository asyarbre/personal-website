import FeaturedProjects from '@/components/content/Home/FeaturedProjects';
import HomePage from '@/components/content/Home/Home';
import Layout from '@/components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <main>
        <HomePage />
        <FeaturedProjects />
      </main>
    </Layout>
  );
}
