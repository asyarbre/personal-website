import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import { Stacks } from '@/components/elements/Stacks';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Project } from '@/types/project';

export function ProjectCard({ project }: { project: Project }) {
  const { title, description, image, link, stacks } = project;
  return (
    <Link href={link} rel='noopener noreferrer' target='_blank'>
      <Card className='group w-[350px] hover:scale-[1.02] hover:border-primary duration-300'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className='h-10'>{description}</CardDescription>
          <div className='flex items-center space-x-2'>
            <TooltipProvider>
              {stacks?.map((tech) => (
                <Tooltip key={tech} delayDuration={0}>
                  <TooltipTrigger>
                    {Stacks[tech] || <span>{tech}</span>}
                  </TooltipTrigger>
                  <TooltipContent>{tech}</TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent>
          {image && (
            <div className='relative'>
              <Image
                className='w-full h-40 rounded object-cover object-center'
                src={image}
                width={500}
                height={200}
                alt={title}
              />
              <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded bg-background text-sm font-medium text-black dark:text-white opacity-0 transition-opacity duration-300 group-hover:opacity-90'>
                <span>View Project</span>
                <ArrowRight size={20} />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
