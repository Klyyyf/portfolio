import { experiences } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'
import { TimelineItem } from '../ui/TimelineItem'

export function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-black/5">
      <div className="section-container">
        <SectionTitle
          title="Experiência"
          subtitle="Minha trajetória profissional"
        />
        <div className="mx-auto max-w-3xl">
          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
