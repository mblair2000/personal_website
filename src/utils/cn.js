/**
 * Tiny className merger — combine conditional classes without a library.
 * Usage: cn('base', condition && 'extra', 'always')
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
