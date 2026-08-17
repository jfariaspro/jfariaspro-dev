export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  role?: string;
  deployment?: string;
  elevatorPitch: string;
  fullDescription: string;
  tags: string[];
  features?: string[];
  link?: string;
  images: ProjectImage[];
  colorPlaceholder?: string;
}
