import * as React from 'react';
import Layout from '@/components/Layout/Layout';
import About from '@/components/content/About/About';
import Education from '@/components/content/About/Education';
import Career from '@/components/content/About/Career';

export default function AboutPage() {
  return (
    <Layout>
      <main>
        <About />
        <Career />
        <Education />
      </main>
    </Layout>
  );
}
