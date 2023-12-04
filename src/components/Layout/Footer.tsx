import Link from 'next/link';
import { IconType } from 'react-icons';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import { Separator } from '../ui/separator';

export default function Footer() {
  return (
    <footer className='mt-4 pb-4'>
      <div className='layout flex flex-col items-center justify-center'>
        <Separator className='my-2' />
        <p className='text-xl font-semibold'>Reach me out</p>
        <div className='flex items-center space-x-4'>
          {socialLinks.map((socialLink) => (
            <Link
              key={socialLink.href}
              href={socialLink.href}
              rel='noopener noreferrer'
              aria-label='social-link'
              target='_blank'
            >
              <socialLink.icon className='my-auto mt-3 h-6 w-6 hover:text-primary' />
            </Link>
          ))}
        </div>
        <p className='mt-4 text-muted-foreground'>
          &copy; {new Date().getFullYear()} Asya'ri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const socialLinks: { href: string; icon: IconType }[] = [
  {
    href: 'https://www.linkedin.com/in/asyari1/',
    icon: SiLinkedin,
  },
  {
    href: 'https://github.com/asyarbre',
    icon: SiGithub,
  },
];
