import { personal } from '../../data/portfolio'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section id="hero" className="section-padding min-h-[calc(100vh-4rem)] flex items-center">
      <div className="section-container w-full">
        <div className="flex flex-col items-center text-center gap-8 md:gap-10">
          {personal.avatar && (
            <div className="h-28 w-28 md:h-32 md:w-32 overflow-hidden rounded-full border-4 border-blue/10">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-black md:text-6xl lg:text-7xl">
              {personal.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-blue md:text-2xl">
              {personal.role}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-black/60 md:text-xl max-w-2xl mx-auto">
              {personal.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="#projects" size="lg">
              Ver Projetos
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
