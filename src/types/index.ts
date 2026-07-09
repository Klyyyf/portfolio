export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  demoUrl: string
  category: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string
}

export interface Education {
  course: string
  institution: string
  year: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface TechItem {
  name: string
  icon: string
}
