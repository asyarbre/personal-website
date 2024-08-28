import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from 'mdx/types';
import Head from 'next/head';

import { Heading } from '@/components/mdx/Heading';
import Para from '@/components/mdx/Para';

import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  meta: { author: string; title: string; slug: string; topics: string[] };
}

const components: MDXComponents = {
  h1: Heading.H1,
  h2: Heading.H2,
  p: Para,
};

function ProjectLayout({ children, ...props }: LayoutProps) {
  return (
    <MDXProvider components={components}>
      <Header />
      <Head>
        <title>{props.meta.title}</title>
        <meta name='description' content={props.meta.title} />
      </Head>
      <div className='layout'>
        <div className='flex flex-col mt-6 mb-10 items-center justify-center text-center'>
          <h1 className='text-3xl font-bold'>{props.meta.title}</h1>
          <p className='text-md text-gray-500'>By {props.meta.author}</p>
          <div className='flex flex-wrap gap-2 mt-4'>
            {(Array.isArray(props.meta.topics) ? props.meta.topics : []).map(
              (topic) => (
                <span
                  key={topic}
                  className='text-sm text-gray-500 bg-gray-200 rounded-full px-2 py-1'
                >
                  {topic.slice(0, 1).toUpperCase() + topic.slice(1)}
                </span>
              ),
            )}
          </div>
        </div>
        {children}
      </div>
      <Footer />
    </MDXProvider>
  );
}

export default ProjectLayout;
