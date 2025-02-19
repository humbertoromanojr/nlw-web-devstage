import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonIconProps extends ComponentProps<'button'> {}

export function ButtonIcon({ className, ...props }: ButtonIconProps) {
  return (
    <button
      className={twMerge(
        'p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-400 hover:bg-blue hover:text-gray-900',
        className
      )}
      {...props}
    />
  )
}
