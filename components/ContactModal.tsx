'use client'

import { useTranslations } from 'next-intl'
import { X, Phone, MessageCircle, Mail } from 'lucide-react'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const t = useTranslations('contact')

  if (!isOpen) return null

  const contactMethods = [
    {
      key: 'call',
      icon: Phone,
      label: t('call'),
      value: '+1 (541) 771-6828',
      href: 'tel:+15417716828',
    },
    {
      key: 'whatsapp',
      icon: MessageCircle,
      label: t('whatsapp'),
      value: 'WhatsApp',
      href: 'https://wa.me/15417716828',
    },
    {
      key: 'email',
      icon: Mail,
      label: t('email'),
      value: 'contact@garciaprocleaners.com',
      href: 'mailto:contact@garciaprocleaners.com',
    },
  ]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-sm mx-4 w-full">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <h3 className="font-display text-2xl tracking-wider uppercase text-[#4B4E19] mb-2 text-center">
          {t('title')}
        </h3>
        <p className="font-body text-sm text-gray-600 text-center mb-6">
          {t('subtitle')}
        </p>

        {/* Contact options */}
        <div className="space-y-3">
          {contactMethods.map((method) => (
            <a
              key={method.key}
              href={method.href}
              target={method.key === 'whatsapp' ? '_blank' : undefined}
              rel={method.key === 'whatsapp' ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-4 rounded-xl bg-[#FEF8E8] hover:bg-[#9AC182]/30 transition-colors group"
            >
              <method.icon className="w-6 h-6 text-[#255325]" />
              <div>
                <p className="font-body font-medium text-[#4B4E19]">{method.label}</p>
                <p className="font-body text-sm text-gray-600 group-hover:text-[#255325] transition-colors">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}