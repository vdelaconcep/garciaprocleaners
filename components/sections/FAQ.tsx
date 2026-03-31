'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const t = useTranslations('faq')
  const items = t.raw('items') as { q: string; a: string }[]
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#fbf4e0]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-wider uppercase text-[#4B4E19]">
            {t('title')}
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm shadow-gray-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left font-body font-medium text-[#4B4E19] hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#255325] transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 font-body text-sm text-gray-600">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}