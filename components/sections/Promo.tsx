'use client'

import { useTranslations } from 'next-intl'

interface PromoProps {
  onContactClick: () => void
}

export function Promo({ onContactClick }: PromoProps) {
  const t = useTranslations('promo')

  return (
    <section className="py-16 sm:py-24 bg-[#255325]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Tag */}
          <span className="inline-block font-body font-medium text-sm bg-[#9AC182] text-[#255325] px-4 py-1 rounded-full mb-6">
            {t('tag')}
          </span>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wider uppercase text-white mb-6">
            {t('headline')}
          </h2>

          {/* Body */}
          <p className="font-body font-light text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            {t('body')}
          </p>

          {/* CTA */}
          <button
            onClick={onContactClick}
            className="font-body font-semibold text-base sm:text-lg bg-white text-[#255325] px-8 py-4 rounded-xl hover:bg-[#FEF8E8] transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            {t('cta')}
          </button>
        </div>
      </div>
    </section>
  )
}