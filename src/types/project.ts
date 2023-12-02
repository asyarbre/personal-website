export type Project = {
  link: string;
  title: string;
  description: string;
  techs: {
    icon: React.ComponentType;
    text: string;
  }[];
  image?: string;
};
