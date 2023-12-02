import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

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
  const { title, description, image, link, techs } = project;
  return (
    <Link href={link} rel='noopener noreferrer' target='_blank'>
      <Card className='w-[350px] hover:scale-[1.02]'>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className='h-10'>{description}</CardDescription>
          <div className='flex items-center space-x-2'>
            <TooltipProvider>
              {techs.map((tech) => (
                <Tooltip key={tech.text}>
                  <TooltipTrigger>
                    <tech.icon />
                  </TooltipTrigger>
                  <TooltipContent>{tech.text}</TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent>
          {image && (
            <Image
              className='w-full h-40 rounded object-cover object-center'
              src={image}
              width={500}
              height={200}
              alt={title}
            />
          )}
          <p className='mt-2 inline-block font-medium'>See more →</p>
        </CardContent>
      </Card>
    </Link>
  );
}
