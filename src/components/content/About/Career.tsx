import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import DataCareer from '@/data/careers';

import CloudinaryImg from '@/components/elements/CloudinaryImage';
import { Card, CardContent } from '@/components/ui/card';

export default function Career() {
  const [showResponsibilities, setShowResponsibilities] = useState<boolean[]>(
    Array(DataCareer.length).fill(false),
  );

  const toggleResponsibilities = (index: number) => {
    setShowResponsibilities((prev) =>
      prev.map((show, i) => (i === index ? !show : show)),
    );
  };

  return (
    <Card>
      <CardContent className='p-4 space-y-5'>
        {DataCareer.map((career, index) => (
          <div
            key={index}
            className='my-3 flex rounded-xl gap-5 py-4 px-6 border border-border bg-primary-foreground'
          >
            <div className='mt-1.5 w-fit'>
              {career.logo && (
                <CloudinaryImg
                  publicId={career.logo}
                  width={50}
                  height={50}
                  alt={career.company}
                  className='duration-500 ease-in-out scale-100 blur-0 grayscale-0 h-14 w-14 rounded bg-neutral-50 p-1 hover:scale-110 hover:bg-transparent'
                  preview={false}
                />
              )}
            </div>
            <div className='w-4/5 space-y-3'>
              <div className='space-y-1'>
                <div className='flex gap-1 md:gap-2'>
                  <h6 className='font-bold'>{career.position}</h6>
                  {career.type && (
                    <span className='text-muted-foreground font-semibold'>
                      ({career.type})
                    </span>
                  )}
                </div>
                <div className='text-sm space-y-2'>
                  <div className='flex gap-1 md:gap-2'>
                    <h6 className='text-sm'>{career.company}</h6>
                    {career.location && (
                      <p className='font-semibold'>({career.location})</p>
                    )}
                  </div>
                  <div className='flex flex-col text-[12px] md:text-[14px]'>
                    <div className='flex gap-1'>
                      <p>{career.startDate}</p> - <p>{career.endDate}</p>
                      <p className='text-muted-foreground'>
                        ~ {career.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => toggleResponsibilities(index)}
                className='-ml-1 mt-5 flex items-center gap-1 text-sm text-muted-foreground'
              >
                <ChevronRight
                  size={18}
                  className={cn({
                    'rotate-90 transition-all duration-300':
                      showResponsibilities[index],
                  })}
                />
                {showResponsibilities[index] ? 'Hide' : 'Show'} Responsibilities
              </button>
              <div>
                {showResponsibilities[index] && (
                  <ul className='ml-5 list-disc space-y-1 pb-2 text-sm leading-normal'>
                    {career.responsibilities &&
                      career.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
