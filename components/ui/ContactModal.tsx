'use client'

import { useTranslations } from 'next-intl'
import { Phone, MessageCircle, Mail, X } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const t = useTranslations('contact')

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="font-display text-2xl tracking-wider uppercase text-center mb-2">
          {t('title')}
        </h2>
        <p className="text-center text-gray-600 mb-6 font-body">
          {t('subtitle')}
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="tel:+15417716828"
            className="flex items-center justify-center gap-3 bg-[#255325] text-white py-4 px-6 rounded-xl font-body font-semibold hover:bg-[#1a3d1a] transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>{t('call')}</span>
            <span className="text-sm opacity-80">+1 (541) 771-6828</span>
          </a>

          <a
            href="https://wa.me/15417716828"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 rounded-xl font-body font-semibold hover:bg-[#1da851] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('whatsapp')}</span>
          </a>

          <a
            href="mailto:contact@garciaprocleaners.com"
            className="flex items-center justify-center gap-3 bg-[#4B4E19] text-white py-4 px-6 rounded-xl font-body font-semibold hover:bg-[#3a3b13] transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>{t('email')}</span>
          </a>
        </div>
      </div>
    </div>
  )
}