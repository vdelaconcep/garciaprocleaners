'use client'

import { useTranslations } from 'next-intl'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { Sparkles, Home, Sofa, Grid3X3, GlassWater } from 'lucide-react'

const icons = {
  Sparkles,
  Home,
  Sofa,
  Grid3X3,
  GlassWater,
}

export function Services() {
  const t = useTranslations('services')

  const services = [
    { icon: 'Sparkles', title: t('items.0.title'), description: t('items.0.description') },
    { icon: 'Home', title: t('items.1.title'), description: t('items.1.description') },
    { icon: 'Sofa', title: t('items.2.title'), description: t('items.2.description') },
    { icon: 'Grid3X3', title: t('items.3.title'), description: t('items.3.description') },
    { icon: 'GlassWater', title: t('items.4.title'), description: t('items.4.description') },
  ]

  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título y subtítulo */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wider uppercase text-[#4B4E19] mb-4">
            {t('title')}
          </h2>
          <p className="font-body font-light text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const IconComponent = icons[service.icon as keyof typeof icons]
            return (
              <AnimatedCard
                key={service.title}
                delay={i * 100}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200"
              >
                <IconComponent className="w-8 h-8 text-[#255325] mb-3" />
                <h3 className="font-display text-xl tracking-wider uppercase text-[#4B4E19] mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-gray-600 mt-1">
                  {service.description}
                </p>
              </AnimatedCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}