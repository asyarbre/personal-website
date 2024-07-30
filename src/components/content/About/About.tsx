import {
  Bookmark,
  Briefcase,
  ClipboardList,
  GraduationCap,
} from 'lucide-react';

import Career from '@/components/content/About/Career';
import Education from '@/components/content/About/Education';
import Intro from '@/components/content/About/Intro';
import Resume from '@/components/content/About/Resume';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
        <TabsContent value='education'>
          <Education />
        </TabsContent>
      </Tabs>
    </section>
  );
}
