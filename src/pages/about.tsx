import { NextSeo } from 'next-seo';
import * as React from 'react';

import About from '@/components/content/About/About';
import Layout from '@/components/Layout/Layout';

export default function AboutPage() {
  return (
    <>
      <NextSeo title={`About - Asya'ri`} />
      <Layout>
        <main>
          <About />
        </main>
      </Layout>
    </>
  );
}
