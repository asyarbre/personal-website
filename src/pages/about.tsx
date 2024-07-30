import * as React from 'react';

import About from '@/components/content/About/About';
import { Seo } from '@/components/elements/Seo';
import Layout from '@/components/Layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <Seo title='About' />
      <main>
        <About />
      </main>
    </Layout>
  );
}
