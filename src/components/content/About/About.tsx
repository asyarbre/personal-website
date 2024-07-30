import {
  Bookmark,
  Briefcase,
  ClipboardList,
  GraduationCap,
} from 'lucide-react';
import Image from 'next/image';

import Career from '@/components/content/About/Career';
import Intro from '@/components/content/About/Intro';
import Resume from '@/components/content/About/Resume';
import { Stacks } from '@/components/elements/Stacks';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function About() {
  return (
    <section className='layout min-h-main my-8'>
      <h2 className='text-primary'>About</h2>
      <p className='text-muted-foreground'>
        Deep insight into who I am—because every detail adds richness to the
        tapestry of existence.
      </p>
      <Separator className='my-4' />

      <Tabs defaultValue='intro' className='w-full'>
        <TabsList className='grid w-full grid-cols-4'>
          <TabsTrigger value='intro'>
            <Bookmark size={14} className='mr-2' />
            Intro
          </TabsTrigger>
          <TabsTrigger value='resume'>
            <ClipboardList size={14} className='mr-2' />
            Resume
          </TabsTrigger>
          <TabsTrigger value='career'>
            <Briefcase size={14} className='mr-2' />
            Career
          </TabsTrigger>
          <TabsTrigger value='education'>
            <GraduationCap size={14} className='mr-2' />
            Education
          </TabsTrigger>
        </TabsList>
        <TabsContent value='intro'>
          <Intro />
        </TabsContent>
        <TabsContent value='resume'>
          <Resume />
        </TabsContent>
        <TabsContent value='career'>
          <Career />
        </TabsContent>
      </Tabs>

      <div className='mt-4'>
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
            Flutter and Kotlin. Back-end expertise includes ExpressJs, Laravel,
            Codeigniter, and database management with MySQL and MongoDB.
            Well-versed in responsive design frameworks such as Bootstrap and
            TailwindCSS. Additionally, possess Linux server administration
            skills and Google Cloud Platform.
          </p>
        </article>
        <h3 className='mt-12 text-primary'>Tech Stack</h3>
        <figure className='mt-3 flex flex-wrap gap-3'>
          <TooltipProvider delayDuration={50}>
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
