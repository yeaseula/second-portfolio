interface DescriptType {
  id: string;
  des: string;
}

export interface projectInforType {
  src: string;
  srcSet: string;
  alt: string;
  srOnly: string;
  contentsId: string;
  title: string;
  period: string;
  contribution: string;
  description: DescriptType[];
  skills: string[];
}
