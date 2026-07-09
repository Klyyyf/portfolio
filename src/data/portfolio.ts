import type { Project, Experience, Education, SocialLink, TechItem } from '../types'

export const personal = {
  name: "Klyfithon Paulo",
  role: "Desenvolvedor Full Stack",
  description:
    "Desenvolvedor entusiasta por tecnologia, com experiência em desenvolvimento de aplicações web e integração de APIs REST. Busco constantemente aprimorar minhas habilidades e contribuir para projetos inovadores.",
  avatar: "/avatar.jpg",
  resumeUrl: "#",
}

export const aboutText = [
  "Estudante de Bacharelado em Tecnologia da Informação na UFRN, com experiência em desenvolvimento de aplicações web utilizando Java, Spring, React/Next.js e integração de APIs REST em projetos acadêmicos. Tenho facilidade de aprendizado, boa comunicação e interesse em engenharia de software, análise de requisitos, backend e aplicações com Inteligência Artificial.",
  "Participação em projetos acadêmicos desenvolvidos em equipe utilizando metodologias ágeis, com experiência na definição de requisitos, implementação de funcionalidades e integração entre frontend e backend.",
]

export const technologies: TechItem[] = [
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🌱" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Git", icon: "⎇" },
  { name: "Hibernate/JPA", icon: "🗄️" },
  { name: "Next.js", icon: "▲" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Postman", icon: "🧪" },
  { name: "Docker", icon: "🐳" },
]

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "ComicBoxd",
    description:
      "Plataforma de compartilhamento de quadrinhos, permitindo aos usuários catalogar, avaliar e discutir suas coleções de quadrinhos favoritos.",
    image: "Comicboxd.png",
    technologies: ["Java", "Spring Boot", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/Klyyyf/comicboxd",
    demoUrl: "https://demo-placeholder.com",
    category: "Full Stack",
  },
  {
    id: "proj-2",
    title: "Servicelink e ServiceFramework",
    description:
      "Plataforma para conectar prestadores de serviços domésticos a clientes, com funcionalidades de agendamento, avaliação e pagamento online. Posteriormente transformado em um framework para facilitar a criação de aplicações similares.",
    image: "https://placehold.co/600x400/2D7ABA/FFFFFF?text=Servicelink",
    technologies: ["Java", "Spring Boot", "TypeScript", "PostgreSQL"],
    githubUrl: "https://github.com/PuliSaglio/serviceFramework",
    demoUrl: "https://demo-placeholder.com",
    category: "Full Stack",
  },
  {
    id: "proj-3",
    title: "NumeraTutor",
    description:
      "Sistema tutor inteligente para auxiliar estudantes em matemática, oferecendo exercícios personalizados, feedback em tempo real e monitoramento de progresso.",
    image: "Numeratutor.png",
    technologies: ["Next.js", "TypeScript", "Vercel"],
    githubUrl: "https://github.com/Joaremio/NumeraTutor",
    demoUrl: "https://demo-placeholder.com",
    category: "Front End",
  },
  {
    id: "proj-4",
    title: "Em Breve",
    description:
      "Projeto em desenvolvimento, novidades em breve!",
    image: "https://placehold.co/600x400/2D7ABA/FFFFFF?text=...",
    technologies: ["Java", "Spring Boot", "Hibernate/JPA", "PostgreSQL"],
    githubUrl: "https://github.com/Klyyyf",
    demoUrl: "https://demo-placeholder.com",
    category: "Back End",
  },
]

export const experiences: Experience[] = [
  {
    company: "",
    role: "Buscando oportunidades",
    period: "Presente",
    description:
      "Atualmente estou em busca de oportunidades para aplicar minhas habilidades em desenvolvimento de software, contribuindo para projetos inovadores e desafiadores.",
  },
]

export const education: Education[] = [
  {
    course: "Tecnico em Informática",
    institution: "Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte (IFRN)",
    year: "2018 — 2022",
  },
  {
    course: "Bacharelado em Tecnologia da Informação",
    institution: "Universidade Federal do Rio Grande do Norte (UFRN)",
    year: "2022 — 2026",
  },
]

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Klyyyf",
    icon: "M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/klyfithon",
    icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    name: "Email",
    url: "klyf.if@gmail.com",
    icon: "M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z",
  },
]

export const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Tecnologias", href: "#tech" },
  { label: "Projetos", href: "#projects" },
  { label: "Experiência", href: "#experience" },
  { label: "Contato", href: "#contact" },
]
