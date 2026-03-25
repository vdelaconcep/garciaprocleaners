'use client'

import { useTranslations } from 'next-intl'
import { AnimatedCard } from '@/components/ui/AnimatedCard'
import { Clock, FileText, Wallet, Users } from 'lucide-react'

const icons = {
  Clock,
  FileText,
  Wallet,
  Users,
}

export function Features() {
  const t = useTranslations('features')

  const features = [
    { icon: 'Clock', title: t('items.0.title'), description: t('items.0.description') },
    { icon: 'FileText', title: t('items.1.title'), description: t('items.1.description') },
    { icon: 'Wallet', title: t('items.2.title'), description: t('items.2.description') },
    { icon: 'Users', title: t('items.3.title'), description: t('items.3.description') },
  ]

  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wider uppercase text-[#4B4E19]">
            {t('title')}
          </h2>
        </div>

        {/* Grid de features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const IconComponent = icons[feature.icon as keyof typeof icons]
            return (
              <AnimatedCard
                key={feature.title}
                delay={i * 100}
                className="bg-[#FEF8E8] rounded-xl p-6 hover:shadow-md transition-shadow duration-200"
              >
                <IconComponent className="w-10 h-10 text-[#255325] mb-4" />
                <h3 className="font-display text-lg tracking-wider uppercase text-[#4B4E19] mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-gray-600">
                  {feature.description}
                </p>
              </AnimatedCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}