import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface InfiniteLoopSliderProps {
  children: ReactNode;
  isReverse?: boolean;
}

const InfiniteLoopSlider = ({
  children,
  isReverse = false,
}: InfiniteLoopSliderProps) => {
  return (
    <StyledSlider className='flex w-fit' isReverse={isReverse}>
      {children}
    </StyledSlider>
  );
};

export default InfiniteLoopSlider;

const StyledSlider = styled.div<{ isReverse: boolean }>`
  animation: loop 30s linear infinite;
  ${({ isReverse }) => isReverse && 'animation-direction: reverse'};
  @keyframes loop {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
