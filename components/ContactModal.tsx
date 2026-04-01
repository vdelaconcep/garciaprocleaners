'use client'

import { useTranslations } from 'next-intl'
import { X, Phone, MessageCircle, Mail, LucideIcon } from 'lucide-react'
import { useParams } from 'next/navigation'

interface ContactMethod {
  key: string
  icon: LucideIcon
  label: string
  value: string
  href: string
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  phone: string
  email: string
  whatsapp: string
  whatsappMessageEN: string
  whatsappMessageES: string
}



export function ContactModal({ isOpen, onClose, phone, email, whatsapp, whatsappMessageEN, whatsappMessageES }: ContactModalProps) {
  const t = useTranslations('contact')
  const { locale } = useParams()

  if (!isOpen) return null

  const contactMethods: ContactMethod[] = [
    {
      key: 'call',
      icon: Phone,
      label: t('call'),
      value: "+"+phone[0]+" ("+phone.slice(1,4)+") "+phone.slice(5),
      href: `tel:${phone.replace(/\D/g, '')}`,
    },
    {
      key: 'whatsapp',
      icon: MessageCircle,
      label: t('whatsapp'),
      value: 'WhatsApp',
      href: `https://wa.me/${whatsapp}?text=${encodeURIComponent(locale === 'es' ? whatsappMessageES : whatsappMessageEN)}`,
    },
    {
      key: 'email',
      icon: Mail,
      label: t('email'),
      value: email,
      href: `mailto:${email}`,
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
      <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-8 max-w-sm mx-4 w-full ring-4 ring-[#255325]">
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
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <a
                key={method.key}
                href={method.href}
                target={method.key === 'whatsapp' ? '_blank' : undefined}
                rel={method.key === 'whatsapp' ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#FEF8E8] hover:bg-[#9AC182]/40 ring-1 ring-[#4B4E19] transition-colors group"
              >
                <Icon className="w-6 h-6 text-[#255325]" />
                <div>
                  <p className="font-body font-medium text-[#4B4E19]">{method.label}</p>
                  <p className="font-body text-sm text-gray-600 group-hover:text-[#255325] transition-colors">
                    {method.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}