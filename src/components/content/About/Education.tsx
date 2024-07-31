import CloudinaryImg from '@/components/elements/CloudinaryImage';
import { Card, CardContent } from '@/components/ui/card';

const educations = [
  {
    school: 'Politeknik Negeri Media Kreatif',
    major: 'Multimedia Engineering Technology',
    degree: 'Diploma 4',
    year: '2021 - 2025',
    logo: 'v1722431689/polimedia-logo_dnf4cu.png',
  },
  {
    school: 'SMKN 22 Jakarta',
    major: 'Computer and Network Engineering',
    degree: 'Vocational High School',
    year: '2018 - 2021',
    logo: 'v1722431689/smkn22-logo_unxmps.png',
  },
];

export default function Education() {
  return (
    <Card>
      <CardContent className='p-4 space-y-5'>
        {educations.map((education, index) => (
          <div
            key={index}
            className='my-3 flex items-center rounded-xl gap-5 py-4 px-6 border border-border bg-primary-foreground'
          >
            <CloudinaryImg
              className='duration-500 ease-in-out scale-100 blur-0 grayscale-0 h-14 w-14 rounded bg-neutral-50 p-1 hover:scale-110 hover:bg-transparent'
              publicId={education.logo}
              width={50}
              height={50}
              alt={education.school}
              preview={false}
            />
            <div className='space-y-1'>
              <h6 className='font-bold'>{education.school}</h6>
              <div className='text-sm space-y-2'>
                <div className='flex flex-col  md:flex-row gap-1 md:gap-2'>
                  <span>{education.degree}</span>
                  <span className='hidden md:flex text-muted-foreground'>
                    •
                  </span>
                  <span>{education.major}</span>
                </div>
                <p>{education.year}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
