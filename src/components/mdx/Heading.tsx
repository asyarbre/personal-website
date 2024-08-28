export const Heading = {
  H1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className='text-2xl font-bold'>{children}</h1>
  ),
  H2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className='text-xl font-bold'>{children}</h2>
  ),
};
