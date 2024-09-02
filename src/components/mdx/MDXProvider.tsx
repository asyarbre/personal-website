import { MDXProvider } from '@mdx-js/react';

import CloudinaryImg from '@/components/elements/CloudinaryImage';
import { Heading } from '@/components/mdx/Heading';
import Para from '@/components/mdx/Para';
import UnorderedList from '@/components/mdx/UnorderedList';

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  p: Para,
  ul: UnorderedList,
  CloudinaryImg,
};

const CustomMDXProvider = ({ children }: { children: React.ReactNode }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default CustomMDXProvider;
