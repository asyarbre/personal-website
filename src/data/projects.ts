import { Project } from '@/types/project';

const DataProjects: Project[] = [
  {
    link: 'https://www.karejo.id/',
    title: 'Karejo Indonesia',
    description:
      'Web-based application as a solution to monitor employee attendance.',
    image: '/projects/karejo.png',
    stacks: ['Next.js', 'TailwindCSS'],
  },
  {
    link: 'https://github.com/asyarbre/audiobook-web',
    title: 'Audiobook Application',
    description: 'web-based application for listening to audiobooks.',
    image: '/projects/audiobook.png',
    stacks: ['Laravel', 'TailwindCSS', 'MySQL'],
  },
  {
    link: 'https://github.com/asyarbre/jajanjalan-api',
    title: 'Jajan Jalan API',
    description: 'RESTful API for Jajan Jalan Application.',
    image: '/projects/jajanjalan.png',
    stacks: ['Express', 'Node.js', 'Prisma', 'MySQL', 'Google Cloud'],
  },
  {
    link: 'https://github.com/asyarbre/personal-website',
    title: 'Personal Website',
    description: 'my personal website.',
    image: '/projects/personal-website.png',
    stacks: ['Next.js', 'TailwindCSS'],
  },
  {
    link: 'https://github.com/asyarbre/inventaris-workshop',
    title: 'Inventory Application',
    description:
      'web-based application for an inventory of goods at Balai Teknologi Survei Kelautan.',
    image: '/projects/inventaris.png',
    stacks: ['Codeigniter', 'Bootstrap', 'MySQL'],
  },
  {
    link: 'https://github.com/asyarbre/moncov',
    title: 'Moncov Application',
    description:
      'mobile application for monitoring data covid-19 in Indonesia.',
    image: '/projects/moncov.png',
    stacks: ['Flutter', 'Dart'],
  },
];

export default DataProjects;
