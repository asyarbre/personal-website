import { BsFillBootstrapFill } from 'react-icons/bs';
import {
  SiCodeigniter,
  SiDart,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiGooglecloud,
  SiJavascript,
  SiKotlin,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const Stacks: stacksProps = {
  'Next.js': <SiNextdotjs size={iconSize} />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
  Express: <SiExpress size={iconSize} />,
  Prisma: <SiPrisma size={iconSize} className='text-emerald-500' />,
  MySQL: <SiMysql size={iconSize} />,
  MongoDB: <SiMongodb size={iconSize} className='text-green-500' />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
  ),
  PHP: <SiPhp size={iconSize} className='text-blue-500' />,
  Laravel: <SiLaravel size={iconSize} className='text-red-500' />,
  Codeigniter: <SiCodeigniter size={iconSize} className='text-red-400' />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  Firebase: <SiFirebase size={iconSize} className='text-yellow-500' />,
  'Google Cloud': <SiGooglecloud size={iconSize} className='text-blue-500' />,
  Kotlin: <SiKotlin size={iconSize} className='text-purple-500' />,
  Flutter: <SiFlutter size={iconSize} className='text-blue-500' />,
  Dart: <SiDart size={iconSize} className='text-blue-500' />,
};
