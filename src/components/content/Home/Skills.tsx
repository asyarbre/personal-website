import { ReactNode, useEffect, useState } from 'react';

import InfiniteLoopSlider from '@/components/elements/InfiniteLoopSLider';
import { Stacks } from '@/components/elements/Stacks';
import { Separator } from '@/components/ui/separator';
import Marquee from 'react-fast-marquee';

const Tag = ({ icon, title }: { icon: ReactNode; title: string }) => (
  <div className='flex items-center gap-2 mr-3 rounded-full py-2 px-5 w-max bg-secondary border border-border'>
    {icon}
    <span>{title}</span>
  </div>
);

export default function Skills() {
  const [shuffledSkills, setShuffledSkills] = useState<
    Array<[string, ReactNode]>
  >([]);

  useEffect(() => {
    const skillsArray = Object.entries(Stacks);
    const shuffledArray = [...skillsArray].sort(() => Math.random() - 0.5);
    setShuffledSkills(shuffledArray);
  }, []);
  return (
    <section className='flex-col justify-center'>
      <article className='layout'>
        <h2 className='text-primary'>Skills</h2>
        <Separator className='my-2' />
          <Marquee className='relative flex flex-col gap-y-4 justify-start py-2 w-full overflow-hidden'>
            {shuffledSkills.map(([title, icon], index) => (
              <Tag key={index} title={title} icon={icon} />
            ))}
          </Marquee>
          <Marquee direction='right' className='relative flex flex-col gap-y-4 justify-start py-2 w-full overflow-hidden'>
            {shuffledSkills.map(([title, icon], index) => (
              <Tag key={index} title={title} icon={icon} />
            ))}
          </Marquee>
      </article>
    </section>
  );
}
