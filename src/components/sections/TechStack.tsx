import { technologies } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export function TechStack() {
  return (
    <section id="tech" className="section-padding border-t border-black/5">
      <div className="section-container">
        <SectionTitle
          title="Tecnologias"
          subtitle="Ferramentas e tecnologias que utilizo no dia a dia"
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 rounded-xl border border-black/10 bg-white p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="text-2xl" role="img" aria-label={tech.name}>
                {tech.icon}
              </span>
              <span className="text-sm font-medium text-black">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
