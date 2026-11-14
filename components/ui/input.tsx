<<<<<<< HEAD
import * as React from 'react'

import { cn } from '@/lib/utils'

/**
 * The toolbar field from chaicode.com's udemy page and Chai Prep's
 * `.cc-input`: h-9, rounded-md, a grey hairline, near-black glass on dark.
 */
const inputClass =
  'h-9 w-full min-w-0 rounded-md border border-gray-200 bg-white px-3 text-sm text-foreground transition-colors duration-150 outline-none placeholder:text-muted-foreground focus-visible:border-gray-300 focus-visible:ring-[3px] focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500/60 dark:border-gray-800 dark:bg-black/50 dark:focus-visible:border-gray-700'

function Input({ className, type = 'text', ...props }: React.ComponentProps<'input'>) {
  return <input data-slot="input" type={type} className={cn(inputClass, className)} {...props} />
}

export { Input, inputClass }
=======
import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cn } from "cn"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      )}
      {...props}
    />
  )
}

export { Input }
>>>>>>> e50f3a944afe51679c42e0c60dfe8ac056ad5751
