type Careers = {
  position: string;
  company: string;
  type: string | null;
  logo: string | null;
  location: string | null;
  startDate: string;
  endDate: string;
  duration: string | null;
  responsibilities?: string[];
};

const DataCareer: Careers[] = [
  {
    position: 'Full Stack Developer',
    company: 'PT Nusantara Infrastructure Tbk',
    type: 'Internship',
    logo: '/images/ni-logo.png',
    location: 'Jakarta',
    startDate: 'Feb 2024',
    endDate: 'Jun 2024',
    duration: '5 months',
    responsibilities: [
      'Slicing UI/UX designs into fully functional and responsive web applications.',
      'Identified and resolved bugs to enhance the performance and stability of web applications. Developed and integrated new features based on user requirements and feedback, continuously improving the overall functionality and user experience.',
      'Upgrade Laravel from version 9 to 10, migrated the build tool from Laravel Mix to Vite.js for improved build performance and modern development capabilities.',
      'Documented the API in Postman to help Flutter developers understand the response.',
      'Collaborated closely with senior IT, UI/UX Team, and Flutter Developer.',
    ],
  },
  {
    position: 'Cloud Computing Cohort',
    company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    type: null,
    logo: '/images/bangkit-logo.jpeg',
    location: null,
    startDate: 'Aug 2023',
    endDate: 'Dec 2023',
    duration: '6 months',
    responsibilities: [
      'Learned web development and Google Cloud technology.',
      'Hands-on Google Cloud Computing Foundation labs on Qwiklabs.',
      'Attended various career development classes led by industry professionals.',
      'Create a RESTful API for the capstone project using ExpressJs, Prisma, MySQL and deploy them to Google Cloud Platform using services such as Cloud Build, Artifact Registry, Cloud Run, Cloud SQL, Cloud Storage and implementing CI/CD pipeline.',
    ],
  },
  {
    position: 'Full Stack Developer',
    company: 'Politeknik Negeri Media Kreatif',
    type: 'Part Time',
    logo: '/images/polimedia-logo.png',
    location: 'Jakarta',
    startDate: 'Jun 2023',
    endDate: 'Aug 2023',
    duration: '3 months',
    responsibilities: [
      'This Audiobook platform contains the final project work of Politeknik Negeri Media Kreatif Publishing Study Program students. This audiobook aims to provide a reading experience for readers to enjoy books without having to read directly.',
      'This audiobook application is available for web applications (audiobook.polimedia.ac.id).',
      'This application allows users to read books and listen to book content in audio form.',
      'Developed a website application using Laravel, TailwindCSS, DaisyUI and MySQL.',
    ],
  },
  {
    position: 'Front End Developer',
    company: 'Karejo Indonesia',
    type: 'Contract',
    logo: '/images/karejo-logo.svg',
    location: 'Jakarta',
    startDate: 'Sep 2022',
    endDate: 'Aug 2023',
    duration: '1 year',
    responsibilities: [
      'Karejo is a business funded by the Polimedia through Program Mahasiswa Wirausaha (PMW).',
      'Karejo is an application to monitor employee attendance in various locations and biometrics for optimal accuracy.',
      'I specialize in crafting sleek user interfaces and transforming them into engaging web applications using Next.js, TailwindCSS, and DaisyUI.',
      'Additionally, I bring my expertise to the mobile realm, where I slice and dice UIs into stunning frontend mobile applications using React Native.',
    ],
  },
  {
    position: 'Full Stack Developer',
    company: 'BPPT',
    type: 'Internship',
    logo: '/images/bppt-logo.png',
    location: 'Jakarta',
    startDate: 'Nov 2019',
    endDate: 'Jan 2020',
    duration: '3 months',
    responsibilities: [
      'Developed a website-based inventory application that effectively manages data related to goods stored incomputer labs, ship equipment warehouses, and offices. (Codeigniter, Bootstrap, MySQL).',
      'I utilize my skills in front-end development, back-end development, and database design to create a seamless user experience that met the needs of the client.',
      'This project involves developing a user-friendly interface that makes it easy for users to navigate the application and  add, edit, delete, borrow, return items from their inventory.',
    ],
  },
  {
    position: 'IT Support',
    company: 'Lembaga Administrasi Negara',
    type: 'Internship',
    logo: '/images/lan-logo.png',
    location: 'Jakarta',
    startDate: 'Aug 2019',
    endDate: 'Oct 2019',
    duration: '3 months',
    responsibilities: [
      'Developed a desktop-based satisfaction applications. My expertise in these technologies allows me to create user friendly applications. (Visual Basic, MySQL).',
      'Installed and configured various IT components, including access points, computer applications, and other hardware and software systems.',
      'Assessed company network requirements and current infrastructure to determine the optimal deployment of wireless access points.',
    ],
  },
];

export default DataCareer;
