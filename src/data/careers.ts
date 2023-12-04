type Careers = {
  position: string;
  company: string;
  type: string | null;
  logo: string | null;
  location: string | null;
  startDate: string;
  endDate: string;
  duration: string | null;
};

const DataCareer: Careers[] = [
  {
    position: 'Cloud Computing Cohort',
    company: 'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka',
    type: null,
    logo: '/images/bangkit-logo.jpeg',
    location: null,
    startDate: 'Aug 2023',
    endDate: 'Dec 2023',
    duration: '6 months',
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
  }
];

export default DataCareer;
