import Image from 'next/image';

import DataCareer from '@/data/careers';

export default function Career() {
  return (
    <section className='layout'>
      <h2 className='text-primary font-bold'>Career</h2>
      <p className='text-muted-foreground lg:text-lg'>
        My professional career journey.
      </p>
      {DataCareer.map((career, index) => (
        <div
          key={index}
          className='my-3 flex items-center rounded-xl gap-5 py-4 px-6 border border-border bg-primary-foreground'
        >
          {career.logo && (
            <Image
              src={career.logo}
              width='50'
              height='50'
              alt={career.company}
            />
          )}
          <div className='space-y-1'>
            <div className='flex gap-1 text-sm md:gap-2'>
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
              <div className='text-muted-foreground flex flex-col text-[12px] md:text-[14px]'>
                <div className='flex gap-1'>
                  <p>{career.startDate}</p> - <p>{career.endDate}</p>
                </div>
                <p>~ {career.duration}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
