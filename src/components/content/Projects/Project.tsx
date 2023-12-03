import DataProjects from '@/data/projects';

import { ProjectCard } from '@/components/elements/ProjectCard';
import { Separator } from '@/components/ui/separator';

export default function Project() {
  return (
    <section className='flex-col'>
      <div className='layout my-8'>
        <h2 className='text-primary'>Projects</h2>
        <p className='text-muted-foreground'>
          Here are some of my works on frontend and backend development.
        </p>
        <Separator className='my-8' />
        <div className='mt-4 flex flex-wrap justify-center gap-3'>
          {DataProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
