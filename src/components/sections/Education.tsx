import { education } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export function EducationSection() {
  return (
    <section id="education" className="section-padding border-t border-black/5">
      <div className="section-container">
        <SectionTitle
          title="Formação"
          subtitle="Minha formação acadêmica e cursos"
        />
        <div className="mx-auto grid max-w-3xl gap-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-black/10 bg-white p-6 transition-all duration-200 hover:shadow-md"
            >
              <span className="text-sm font-medium text-blue">
                {item.year}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-black">
                {item.course}
              </h3>
              <p className="mt-1 text-base text-black/60">
                {item.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
