'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Footer() {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center">
          
          {/* Copyright */}
          <div className="font-body text-sm text-white/60">
            © {year} García ProCleaners. {t('rights')}
          </div>
        </div>
      </div>
    </footer>
  )
}