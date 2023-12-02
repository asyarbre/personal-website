import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import ThemeButton from '../elements/ThemeButton';

export default function Header() {
  const [onTop, setOnTop] = React.useState<boolean>(true);

  const [active, setActive] = React.useState('#home');

  const router = useRouter();

  React.useEffect(() => {
    setActive(router.asPath);
  }, [router.asPath]);

  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 transition-shadow',
        !onTop && 'shadow-md',
      )}
    >
      <div className='h-2 bg-primary' />
      <nav className='layout bg-background flex items-center justify-between py-4 lg:max-w-[68rem]'>
        <ul className='flex items-center space-x-6'>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-primary lg:text-base',
                  active === link.href && 'text-primary',
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeButton />
      </nav>
    </header>
  );
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
];
