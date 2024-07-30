import { Bookmark } from 'lucide-react';
import Image from 'next/image';

import { Stacks } from '@/components/elements/Stacks';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Intro from './Intro';

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
          <TabsTrigger value='resume'>Resume</TabsTrigger>
          <TabsTrigger value='career'>Career</TabsTrigger>
          <TabsTrigger value='education'>Education</TabsTrigger>
        </TabsList>
        <TabsContent value='intro'>
          <Intro />
        </TabsContent>
        <TabsContent value='resume'>
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-2'></CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
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
