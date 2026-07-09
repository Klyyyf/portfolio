type BadgeProps = {
  children: React.ReactNode
  variant?: 'default' | 'yellow'
}

export function Badge({ children, variant = 'default' }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium'

  const variants = {
    default: 'bg-blue/10 text-blue',
    yellow: 'bg-yellow text-black',
  }

  return (
    <span className={`${base} ${variants[variant]}`}>
      {children}
    </span>
  )
}
