import Image from "next/image";

const educations = [
  {
    school: 'Politeknik Negeri Media Kreatif',
    major: 'Multimedia Engineering Technology',
    degree: 'Diploma 4',
    year: '2021 - 2025',
    logo: '/images/polimedia-logo.png',
  },
  {
    school: 'SMKN 22 Jakarta',
    major: 'Computer and Network Engineering',
    degree: 'Vocational High School',
    year: '2018 - 2021',
    logo: '/images/smkn22-logo.png',
  },
];

export default function Education() {
  return (
    <section className='layout my-10'>
      <h2 className='text-primary font-bold'>Educations</h2>
      <p className='text-muted-foreground lg:text-lg'>
        My educational journey.
      </p>
      {educations.map((education, index) => (
        <div
          key={index}
          className='my-3 flex items-center rounded-xl gap-5 py-4 px-6 border border-border bg-primary-foreground'
        >
          <Image
            src={education.logo}
            width='50'
            height='50'
            alt={education.school}
          />
          <div className='space-y-1'>
            <h6>{education.school}</h6>
            <div className='text-sm space-y-2'>
              <div className='flex flex-col text-muted-foreground md:flex-row gap-1 md:gap-2'>
                <span>{education.degree}</span>
                <span className='hidden md:flex text-muted-foreground'>•</span>
                <span>{education.major}</span>
              </div>
              <p className='text-muted-foreground md:text-[13px]'>
                {education.year}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}