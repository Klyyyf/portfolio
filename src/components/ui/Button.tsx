import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonBaseProps = {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants = {
  primary:
    'bg-blue text-white hover:bg-blue/90 focus-visible:bg-blue/90',
  outline:
    'border-2 border-blue text-blue hover:bg-blue hover:text-white focus-visible:bg-blue focus-visible:text-white',
  ghost:
    'text-blue hover:bg-blue/10 focus-visible:bg-blue/10',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button(props: ButtonProps) {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...rest
  } = props

  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 cursor-pointer no-underline'

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if ('href' in rest && (rest as Record<string, unknown>).href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  )
}
