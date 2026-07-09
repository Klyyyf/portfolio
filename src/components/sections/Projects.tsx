import { useState } from 'react'
import { projects } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'
import { Button } from '../ui/Button'
import { ProjectCard } from '../ui/ProjectCard'

const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding border-t border-black/5">
      <div className="section-container">
        <SectionTitle
          title="Projetos"
          subtitle="Alguns projetos que desenvolvi ao longo da minha carreira"
        />

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
