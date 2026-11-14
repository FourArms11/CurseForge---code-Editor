<<<<<<< HEAD
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
=======
export { cn } from "cn"
>>>>>>> e50f3a944afe51679c42e0c60dfe8ac056ad5751
