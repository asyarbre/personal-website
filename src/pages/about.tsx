import * as React from 'react';

import About from '@/components/content/About/About';
import Career from '@/components/content/About/Career';
import Education from '@/components/content/About/Education';
import { Seo } from '@/components/elements/Seo';
import Layout from '@/components/Layout/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <Seo title='About' />
      <main>
        <About />
        <Career />
        <Education />
      </main>
    </Layout>
  );
}
