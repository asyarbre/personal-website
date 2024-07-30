import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';

export default function Intro() {
  return (
    <Card>
      <CardContent className='p-4 space-y-4 leading-[1.8] text-foreground md:leading-loose'>
        <Image
          src='/images/profile.jpg'
          width='500'
          height='500'
          alt='Photo Profile'
          className='rounded-md ml-3 w-24 md:w-32'
        />
        <p>
          I&apos;m an aspiring{' '}
          <span className='font-semibold text-primary'>Software Engineer</span>{' '}
          who is interested in{' '}
          <span className='text-primary'>full-stack development.</span>
        </p>
        <p>
          Passionate and skilled Full Stack Engineer with a strong foundation in
          a diverse set of technologies. Proficient in front-end development
          using ReactJS, NextJs, and mobile app development with Flutter and
          Kotlin. Back-end expertise includes ExpressJs, Laravel, Codeigniter,
          and database management with MySQL and MongoDB. Well-versed in
          responsive design frameworks such as Bootstrap and TailwindCSS.
          Additionally, possess Linux server administration skills and Google
          Cloud Platform.
        </p>
        <p>
          I am dedicated to creating user-friendly, visually appealing websites
          and applications. My journey in software engineering has allowed me to
          work on various projects, from individual contributions to leading
          teams in developing innovative solutions. I thrive in environments
          where collaboration and continuous learning are encouraged.
        </p>
        <p>
          Throughout my career, I have collaborated with diverse teams to
          deliver high-quality software solutions for both established
          enterprises and emerging startups. My proficiency in JavaScript and
          PHP, combined with my familiarity with frameworks like React and PHP
          frameworks such as Codeigniter and Laravel, allows me to tackle
          complex problems and innovate continuously.
        </p>
        <p>
          I am a firm believer in the power of good communication and teamwork.
          My experience has taught me the importance of understanding client
          needs, leading projects to successful completion, and always striving
          for excellence. I am dedicated to continuous learning and staying
          updated with the latest advancements in web development and software
          engineering.
        </p>
        <p>
          I am excited about the opportunity to collaborate and bring creative
          ideas to life. Let's work together to build amazing solutions!
        </p>
      </CardContent>
    </Card>
  );
}
