'use client'

import { useTranslations } from 'next-intl'
import { MessageCircle } from 'lucide-react'

interface FloatingButtonProps {
  onClick: () => void
}

export function FloatingButton({ onClick }: FloatingButtonProps) {
  const t = useTranslations('hero')

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#255325] text-white px-5 py-3 ring-2 ring-[#9AC182] rounded-full shadow-lg shadow-gray-500 hover:bg-[#1a3d1a] transition-all duration-200 hover:scale-105 hover:shadow-xl font-body font-semibold text-sm cursor-pointer"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">{t('cta')}</span>
    </button>
  )
}