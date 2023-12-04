import { useTheme } from 'next-themes';
import * as React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { Button } from '@/components/ui/button';

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      variant='outline'
      size='icon'
      className='hover:border-primary'
      aria-label='Toggle theme'
    >
      {mounted && theme === 'dark' ? (
        <FiSun className='w-4 h-4' />
      ) : (
        <FiMoon className='w-4 h-4' />
      )}
    </Button>
  );
}
