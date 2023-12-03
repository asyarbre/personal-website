import styled from '@emotion/styled';
import { NextPage } from 'next';

const NotFoundPage: NextPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-main'>
      <StyledNotFoundPage title='404' className='text-7xl'>
        404
      </StyledNotFoundPage>
      <h2 className='text-xl animate-pulse my-5'>
        Whoops, there doesn&apos;t seem to be anything here!
      </h2>
    </div>
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
