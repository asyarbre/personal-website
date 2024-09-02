export const Heading = {
  H1: ({ children }: { children?: React.ReactNode }) => (
    <h1 className='text-2xl font-bold text-primary'>{children}</h1>
  ),
  H2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className='pt-4 text-xl font-bold text-foreground'>{children}</h2>
  ),
  H3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className='pt-4 text-[18px] font-medium leading-snug text-foreground'>
      {children}
    </h3>
  ),
};
