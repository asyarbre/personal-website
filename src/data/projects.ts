import {
  SiBootstrap,
  SiCodeigniter,
  SiDart,
  SiExpress,
  SiFlutter,
  SiGooglecloud,
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiTailwindcss,
} from 'react-icons/si';

import { Project } from '@/types/project';

const DataProjects: Project[] = [
  {
    link: 'https://www.karejo.id/',
    title: 'Karejo Indonesia',
    description:
      'Web-based application as a solution to monitor employee attendance.',
    techs: [
      {
        icon: SiNextdotjs,
        text: 'Next.js',
      },
      {
        icon: SiTailwindcss,
        text: 'Tailwind CSS',
      },
    ],
    image: '/projects/karejo.png',
  },
  {
    link: 'https://github.com/asyarbre/audiobook-web',
    title: 'Audiobook Application',
    description: 'web-based application for listening to audiobooks.',
    techs: [
      {
        icon: SiLaravel,
        text: 'Laravel 10',
      },
      {
        icon: SiTailwindcss,
        text: 'Tailwind CSS',
      },
      {
        icon: SiMysql,
        text: 'MySQL',
      },
    ],
    image: '/projects/audiobook.png',
  },
  {
    link: 'https://github.com/asyarbre/jajanjalan-api',
    title: 'Jajan Jalan API',
    description: 'RESTful API for Jajan Jalan Application.',
    techs: [
      {
        icon: SiExpress,
        text: 'Express.js',
      },
      {
        icon: SiNodedotjs,
        text: 'Node.js',
      },
      {
        icon: SiPrisma,
        text: 'Prisma',
      },
      {
        icon: SiMysql,
        text: 'MySQL',
      },
      {
        icon: SiGooglecloud,
        text: 'Google Cloud',
      },
    ],
    image: '/projects/jajanjalan.png',
  },
  {
    link: 'https://github.com/asyarbre/personal-website',
    title: 'Personal Website',
    description: 'my personal website.',
    techs: [
      {
        icon: SiNextdotjs,
        text: 'Next.js',
      },
      {
        icon: SiTailwindcss,
        text: 'Tailwind CSS',
      },
    ],
    image: '/projects/personal-website.png',
  },
  {
    link: 'https://github.com/asyarbre/inventaris-workshop',
    title: 'Inventory Application',
    description:
      'web-based application for an inventory of goods at Balai Teknologi Survei Kelautan.',
    techs: [
      {
        icon: SiCodeigniter,
        text: 'Codeigniter 3',
      },
      {
        icon: SiBootstrap,
        text: 'Bootstrap 4',
      },
      {
        icon: SiMysql,
        text: 'MySQL',
      },
    ],
    image: '/projects/inventaris.png',
  },
  {
    link: 'https://github.com/asyarbre/moncov',
    title: 'Moncov Application',
    description:
      'mobile application for monitoring data covid-19 in Indonesia.',
    techs: [
      {
        icon: SiFlutter,
        text: 'Flutter',
      },
      {
        icon: SiDart,
        text: 'Dart',
      },
    ],
    image: '/projects/moncov.png',
  },
];

export default DataProjects;
