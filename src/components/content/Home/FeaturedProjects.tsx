import Link from 'next/link';

import DataProjects from '@/data/projects';

import { ProjectCard } from '@/components/elements/ProjectCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function FeaturedProjects() {
  return (
    <section className='flex-col pb-20 justify-center'>
      <article className='layout'>
        <h3 className='text-primary'>Featured Projects</h3>
        <Separator className='my-2' />
        <div className='mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
          {DataProjects.slice(0, 3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className='flex justify-center mt-8'>
          <Button size='lg' variant='secondary' asChild>
            <Link href='/projects'>See more projects</Link>
          </Button>
        </div>
      </article>
    </section>
  );
}
