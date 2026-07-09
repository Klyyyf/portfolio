import type { Experience } from '../../types'

type TimelineItemProps = {
  experience: Experience
}

export function TimelineItem({ experience }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      <div className="absolute left-0 top-1 flex flex-col items-center">
        <div className="h-4 w-4 rounded-full border-2 border-blue bg-white" />
        <div className="mt-1 h-full w-0.5 bg-blue/20" />
      </div>

      <div>
        <span className="inline-block text-sm font-medium text-blue">
          {experience.period}
        </span>
        <h3 className="mt-1 text-xl font-semibold text-black">
          {experience.role}
        </h3>
        <p className="text-base font-medium text-black/60">
          {experience.company}
        </p>
        <p className="mt-3 text-base leading-relaxed text-black/60">
          {experience.description}
        </p>
      </div>
    </div>
  )
}
