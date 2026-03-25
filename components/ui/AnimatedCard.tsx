'use client'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface AnimatedCardProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedCard({ children, delay = 0, className = '' }: AnimatedCardProps) {
  const { ref, isVisible } = useIntersectionObserver()

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        WebkitTransition: 'opacity 0.5s ease-out, -webkit-transform 0.5s ease-out',
        WebkitTransform: isVisible ? 'translateY(0)' : 'translateY(28px)',
      }}
    >
      {children}
    </div>
  )
}