import { aboutText } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export function About() {
  return (
    <section id="about" className="section-padding border-t border-black/5">
      <div className="section-container">
        <SectionTitle
          title="Sobre"
          subtitle="Conheça um pouco sobre minha trajetória"
        />
        <div className="mx-auto max-w-3xl space-y-5">
          {aboutText.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed text-black/70"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
