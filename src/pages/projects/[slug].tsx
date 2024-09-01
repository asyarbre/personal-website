import { TooltipContent } from '@radix-ui/react-tooltip';
import fs from 'fs';
import matter from 'gray-matter';
import { ChevronLeft } from 'lucide-react';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { NextSeo } from 'next-seo';
import path from 'path';
import { HiLink } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import rehypePrettyCode from 'rehype-pretty-code';

import CloudinaryImg from '@/components/elements/CloudinaryImage';
import { Stacks } from '@/components/elements/Stacks';
import Layout from '@/components/Layout/Layout';
import CustomMDXProvider from '@/components/mdx/MDXProvider';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type FrontMatterType = {
  title: string;
  author: string;
  banner: string;
  link?: string;
  github?: string;
  topics: string[];
  description: string;
  stacks: string[];
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'github-dark',
};

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
  const { params } = ctx as { params: { slug: string } };
  const filePath = path.join(
    process.cwd(),
    'src/contents/project',
    `${params.slug}.mdx`,
  );
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, options]],
    },
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

function DetailProjectPage({
  source,
  frontMatter,
}: InferGetStaticPropsType<typeof getStaticProps> & {
  frontMatter: FrontMatterType;
}) {
  return (
    <>
      <NextSeo title={frontMatter.description} />
      <Layout>
        <main className='layout'>
          <section>
            <div className='flex gap-2 w-max hover:gap-3 items-center mb-6 transition-all duration-300 font-medium text-foreground hover:text-primary cursor-pointer'>
              <ChevronLeft />
              <Link href='/projects'>Back</Link>
            </div>
            <CloudinaryImg
              width={1440}
              height={700}
              publicId={frontMatter.banner}
              alt={frontMatter.title}
            />
            <h1 className='mt-4 font-bold text-foreground md:text-3xl text-2xl'>
              {frontMatter.title}
            </h1>
            <p className='mt-2 text-sm text-muted-foreground'>
              {frontMatter.description}
            </p>
            <div className='mt-4 text-sm flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <span>Tech Stacks: </span>
                <div className='flex items-center gap-x-2'>
                  <TooltipProvider>
                    {frontMatter.stacks.map((tech) => (
                      <Tooltip key={tech}>
                        <TooltipTrigger>
                          {Stacks[tech] || <span>{tech}</span>}
                        </TooltipTrigger>
                        <TooltipContent>{tech}</TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </div>
              <div className='flex items-center'>
                {frontMatter.github && (
                  <Button variant='link' asChild>
                    <Link
                      href={frontMatter.github}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <SiGithub className='text-lg text-gray-800 dark:text-white mr-2' />
                      Repository
                    </Link>
                  </Button>
                )}
                {frontMatter.link && (
                  <Button variant='link' asChild>
                    <Link
                      href={frontMatter.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <HiLink className='text-lg text-gray-800 dark:text-white mr-2' />
                      Open Live Site
                    </Link>
                  </Button>
                )}
              </div>
            </div>
            <Separator className='my-4' />
          </section>
          <CustomMDXProvider>
            <MDXRemote {...source} />
          </CustomMDXProvider>
        </main>
      </Layout>
    </>
  );
}

export default DetailProjectPage;
