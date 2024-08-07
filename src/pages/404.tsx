import styled from '@emotion/styled';
import { NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

import { Button } from '@/components/ui/button';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <NextSeo title='404 - Not Found' />
      <div className='flex flex-col justify-center items-center min-h-main'>
        <StyledNotFoundPage title='404' className='text-7xl'>
          404
        </StyledNotFoundPage>
        <h2 className='text-xl animate-pulse my-5 text-center'>
          Whoops, there doesn&apos;t seem to be anything here!
        </h2>
        <Button variant='link' asChild>
          <Link href='/' className='text-lg'>
            Go back home
          </Link>
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;

const StyledNotFoundPage = styled.h1`
  animation: glitch 1s linear infinite;

  @keyframes glitch {
    2%,
    64% {
      transform: translate(2px, 0) skew(0deg);
    }
    4%,
    60% {
      transform: translate(-2px, 0) skew(0deg);
    }
    62% {
      transform: translate(0, 0) skew(5deg);
    }
  }
`;
