'use client'

import { useTranslations } from 'next-intl'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { MapPin } from 'lucide-react'

export function ServiceAreas() {
  const t = useTranslations('areas')
  const locations = t.raw('locations') as string[]

  return (
    <section id="areas" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wider uppercase text-[#4B4E19] mb-4">
            {t('title')}
          </h2>
          <p className="font-body font-light text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {locations.map((location, i) => (
            <AnimatedCard
              key={location}
              delay={i * 50}
              className="flex items-center gap-2 bg-[#9AC182]/30 ring-1 ring-[#82a26e] px-5 py-3 rounded-full shadow-md shadow-gray-300"
            >
              <MapPin className="w-4 h-4 text-[#255325]" />
              <span className="font-body font-medium text-[#4B4E19]">{location}</span>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}