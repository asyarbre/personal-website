import Image from 'next/image';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Stacks } from '@/components/elements/Stacks';
import { Separator } from '@/components/ui/separator';

export default function About() {
  return (
    <section className='layout min-h-main py-16'>
      <h2>About</h2>
      <h1 className='text-primary font-bold'>Asya'ri</h1>
      <div className='mt-8'>
        <Image
          src='/images/profile.jpg'
          width='1000'
          height='1000'
          alt='Photo Profile'
          className='rounded-full ml-3 float-right w-40 md:w-64'
        />
        <article className='prose lg:prose-lg'>
          <p className='text-muted-foreground'>
            I&apos;m an aspiring{' '}
            <span className='font-semibold text-primary'>
              Software Engineer
            </span>{' '}
            who is interested in{' '}
            <span className='text-primary'>full-stack development.</span>
          </p>
          <p className='text-muted-foreground'>
            Passionate and skilled Full Stack Engineer with a strong foundation
            in a diverse set of technologies. Proficient in front-end
            development using ReactJS, NextJs, and mobile app development with
            Flutter and Kotlin. Back-end expertise includes
            ExpressJs, Laravel, Codeigniter, and database management with MySQL
            and MongoDB. Well-versed in responsive design frameworks such as
            Bootstrap and TailwindCSS. Additionally, possess Linux server
            administration skills and and Google Cloud Platform.
          </p>
        </article>
        <h3 className='mt-12 text-primary'>Tech Stack</h3>
        <figure className='mt-3 flex flex-wrap gap-3'>
          <TooltipProvider>
            {Object.entries(Stacks).map(([text, icon], index) => (
              <Tooltip key={index}>
                <TooltipTrigger>{icon}</TooltipTrigger>
                <TooltipContent>{text}</TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </figure>
        <Separator className='mt-8' />
      </div>
    </section>
  );
}
