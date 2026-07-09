import { socialLinks } from '../../data/portfolio'
import { SectionTitle } from '../ui/SectionTitle'

export function Contact() {
  return (
    <section id="contact" className="section-padding border-t border-black/5">
      <div className="section-container">
        <SectionTitle
          title="Contato"
          subtitle="Vamos conversar? Me encontre nas redes sociais"
        />
        <div className="flex flex-wrap items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="group flex items-center gap-3 rounded-xl border border-black/10 bg-white px-6 py-4 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-black/40 transition-colors duration-200 group-hover:text-blue"
                aria-hidden="true"
              >
                <path d={link.icon} />
              </svg>
              <span className="text-base font-medium text-black transition-colors duration-200 group-hover:text-blue">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
