import { Leaf } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <span
        className={cn(
          'flex size-9 items-center justify-center rounded-full',
          inverted ? 'bg-primary-foreground text-primary' : 'bg-primary text-primary-foreground',
        )}
      >
        <Leaf className="size-4" aria-hidden="true" />
      </span>
      <span className="font-serif text-2xl font-semibold tracking-tight">Yumico</span>
    </span>
  )
}
