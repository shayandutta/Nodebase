import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

//cn -> very useful
//instead of using template literals, cn can be used for conditional styling
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
