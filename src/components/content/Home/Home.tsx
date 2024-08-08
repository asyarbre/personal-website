import Link from 'next/link';
import { IoArrowDownOutline, IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <section className='min-h-main mt-52 flex-col justify-center' id='home'>
      <article className='layout'>
        <h1>Hi! 🖐️</h1>
        <h1 className='mt-1 tracking-wide'>
          My name is <span className='text-primary'>Asya'ri</span>
        </h1>
        <p className='mt-4 max-w-3xl md:mt-6 md:text-lg 2xl:text-xl'>
          A student who aspires to be a{' '}
          <span className='text-primary font-semibold'>software engineer</span>{' '}
          interested in{' '}
          <span className='text-primary font-semibold'>
            full-stack development
          </span>
        </p>
        <div className='mt-8 flex text-muted-foreground flex-wrap gap-4 gap-y-2 md:text-lg lg'>
          <Button variant='outline' asChild>
            <Link
              href='https://bit.ly/cv-asyari'
              rel='noopener noreferrer'
              target='_blank'
            >
              <IoNewspaperSharp className='shrink-0' />
              <span className='ml-1'>Resume</span>
            </Link>
          </Button>
          <Button variant='outline' asChild>
            <Link
              href='https://www.linkedin.com/in/asyari1/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <SiLinkedin className='shrink-0' />
              <span className='ml-1'>Asya'ri</span>
            </Link>
          </Button>
          <Button variant='outline' asChild>
            <Link
              href='https://github.com/asyarbre'
              rel='noopener noreferrer'
              target='_blank'
            >
              <SiGithub className='shrink-0' />
              <span className='ml-1'>asyarbre</span>
            </Link>
          </Button>
        </div>
        <Button className='mt-4' size='lg' variant='secondary' asChild>
          <Link href='/about'>Learn more about me</Link>
        </Button>
      </article>
      <div className='absolute bottom-2 left-1/2 -translate-x-1/2 md:bottom-10 cursor-pointer rounded-md transition-colors'>
        <IoArrowDownOutline className='text-4xl animate-bounce' />
      </div>
    </section>
  );
}
