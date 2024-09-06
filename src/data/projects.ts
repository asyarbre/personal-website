import { Project } from '@/types/project';

const DataProjects: Project[] = [
  {
    link: 'projects/nita-admin',
    title: 'NITA Admin',
    description: 'Dashboard for Admin to manage their data and content',
    image: 'v1725605259/nita-admin-cover_f1lbbm.png',
    stacks: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'TailwindCSS'],
    isFeatured: true,
  },
  {
    link: 'projects/jajanjalan-api',
    title: 'Jajan Jalan API',
    description: 'RESTful API for Jajan Jalan Application.',
    image: 'v1725271731/jajanjalan_mlxwu6.png',
    stacks: ['Express', 'Node.js', 'Prisma', 'MySQL', 'Google Cloud'],
    isFeatured: true,
  },
  {
    link: 'projects/next-ts-starter',
    title: 'Next.js TypeScript Starter',
    description: 'Next.js + TS + Tailwind CSS + Shadcn UI starter template.',
    image: 'v1725242403/next-starter_qxfjmt.jpg',
    stacks: ['Next.js', 'TypeScript', 'TailwindCSS', 'Shadcnui'],
    isFeatured: true,
  },
  {
    link: '/projects/karejo',
    title: 'Karejo Indonesia',
    description:
      'Web-based application as a solution to monitor employee attendance.',
    image: 'v1725369233/karejo_zlcso2.png',
    stacks: ['Next.js', 'TailwindCSS', 'JavaScript'],
  },
  {
    link: 'projects/nita-merchant',
    title: 'NITA Merchant',
    description: 'Dashboard for Merchant to manage their data and content',
    image: 'v1725605271/nita-merchant-cover_sgbuzb.png',
    stacks: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'TailwindCSS'],
  },
  {
    link: '/projects/audiobook-polimedia',
    title: 'Audiobook Application',
    description: 'web-based application for listening to audiobooks.',
    image: 'v1725458329/audiobook_jv5ebf.png',
    stacks: ['Laravel', 'TailwindCSS', 'Daisyui', 'MySQL'],
  },
  {
    link: 'projects/personal-website',
    title: 'Personal Website',
    description: 'my personal website.',
    image: 'v1725608556/personal-website_zd5cjz.png',
    stacks: ['Next.js', 'TailwindCSS'],
  },
  {
    link: 'projects/inventaris',
    title: 'Inventory Application',
    description:
      'web-based application for an inventory of goods at Balai Teknologi Survei Kelautan.',
    image: 'v1725607625/inventaris_zyvxho.png',
    stacks: ['Codeigniter', 'Bootstrap', 'PHP', 'MySQL'],
  },
];

export default DataProjects;
