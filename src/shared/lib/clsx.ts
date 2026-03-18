import { clsx as clsxLib, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function clsx(...inputs: ClassValue[]) {
  return twMerge(clsxLib(inputs))
}
