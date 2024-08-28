import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import path from 'path';
import ReactMarkdown from 'react-markdown';

import ProjectLayout from '@/components/Layout/ProjectLayout';
import { Heading } from '@/components/mdx/Heading';
import Para from '@/components/mdx/Para';

export async function getStaticPaths() {
  const files = fs.readdirSync('src/contents/project');
  return {
    paths: files.map((file) => ({
      params: {
        slug: file.replace(/\.mdx$/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const { slug } = ctx.params as { slug: string };

  const source = fs.readFileSync(
    path.join('src/contents/project', `${slug}.mdx`),
    'utf8',
  );

  const { data, content } = matter(source);
  return {
    props: {
      data,
      content,
    },
  };
}

function ProjectPage({
  data,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <ProjectLayout
        meta={{
          author: data.author,
          title: data.title,
          slug: data.slug,
          topics: data.topics,
        }}
      >
        <ReactMarkdown
          // eslint-disable-next-line react/no-children-prop
          children={content}
          components={{
            h1: Heading.H1,
            h2: Heading.H2,
            p: Para,
          }}
        />
      </ProjectLayout>
    </>
  );
}

export default ProjectPage;
