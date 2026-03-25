'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { CalendarClock, Clock } from 'lucide-react'

interface HeroProps {
  onContactClick: () => void
}

export function Hero({ onContactClick }: HeroProps) {
  const t = useTranslations('hero')

  return (
    <section className="relative min-h-screen flex items-center bg-[#FEF8E8] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Contenido de texto */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 font-body font-medium text-sm bg-[#9AC182]/30 text-[#255325] px-4 py-2 rounded-full">
                <CalendarClock className="w-4 h-4" />
                {t('badge1')}
              </span>
              <span className="inline-flex items-center gap-2 font-body font-medium text-sm bg-[#255325]/10 text-[#255325] px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                {t('badge2')}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wider uppercase text-[#4B4E19] leading-tight">
              {t('headline')}
            </h1>

            {/* Subtítulo */}
            <p className="font-body font-light text-lg sm:text-xl text-gray-700 max-w-xl">
              {t('subheadline')}
            </p>

            {/* CTA Button */}
            <button
              onClick={onContactClick}
              className="font-body font-semibold text-base sm:text-lg bg-[#255325] text-white px-8 py-4 rounded-xl hover:bg-[#1a3d1a] transition-all duration-200 hover:scale-105 hover:shadow-lg"
            >
              {t('cta')}
            </button>
          </div>

          {/* Imagen */}
          <div className="relative h-[250px] sm:h-[300px] lg:h-[380px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero.jpg"
              alt="García ProCleaners — professional cleaning service"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}