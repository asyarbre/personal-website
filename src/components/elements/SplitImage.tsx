import * as React from 'react';

import { cn } from '@/lib/utils';

export default function SplitImage({
  children,
  column,
}: {
  children: React.ReactNode;
  column: number;
}) {
  return (
    <div className={cn('grid items-start gap-4', `grid-cols-${column}`)}>
      {children}
    </div>
  );
}

export function Split({ children }: { children: React.ReactNode }) {
  return <div className='!mb-0 flex flex-col space-y-4'>{children}</div>;
}
