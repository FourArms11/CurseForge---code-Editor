import { Slot, Slottable } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowUpRight } from 'lucide-react'
import * as React from 'react'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 text-sm font-medium whitespace-nowrap transition-colors duration-200 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: 'rounded-md bg-primary text-primary-foreground hover:bg-primary/90',
        soft: 'rounded-md bg-primary font-semibold text-primary-foreground hover:bg-primary/90',
        solid: 'btn-asym bg-neutral-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-neutral-200',
        outline:
          'btn-asym-mirror border border-neutral-200 bg-transparent text-foreground hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-black/90',
        secondary: 'rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80',
        muted:
          'rounded-md bg-[#d4d4d866] font-montserrat text-[#52525b] hover:bg-[#d4d4d8] dark:bg-[#71717a33] dark:text-[#d4d4d8] dark:hover:bg-black/70',
        ghost: 'rounded-md text-foreground hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        danger: 'rounded-md bg-red-600 font-semibold text-white hover:bg-red-600/90 dark:bg-red-500 dark:hover:bg-red-500/90',
      },
      size: {
        default: 'h-8 gap-1.5 px-2.5',
        sm: 'h-8 gap-1.5 px-3',
        md: 'h-9 px-4',
        lg: 'h-10 px-6',
        icon: 'size-9',
        'icon-xs': 'size-6',
        'icon-sm': 'size-7',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'soft',
      size: 'md',
    },
  },
)

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    iconRight?: React.ReactNode
    render?: React.ReactElement<{ className?: string; children?: React.ReactNode }>
    nativeButton?: boolean
  }

function Button({ className, variant, size, asChild = false, iconRight, render, nativeButton: _nativeButton, children, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  const icon = iconRight === undefined && variant === 'solid' && size !== 'icon' ? <ArrowUpRight /> : iconRight
  const content = (
    <>
      <Slottable>{children}</Slottable>
      {icon ? (
        <span aria-hidden="true" className="-ml-1 inline-flex">
          {icon}
        </span>
      ) : null}
    </>
  )

  if (render) {
    return React.cloneElement(render, {
      ...props,
      className: cn(buttonVariants({ variant, size }), className, render.props.className),
      children: content,
    })
  }

  return (
    <Comp data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {content}
    </Comp>
  )
}

export { Button, buttonVariants }
