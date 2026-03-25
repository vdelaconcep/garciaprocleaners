'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function Footer() {
  const t = useTranslations('footer')
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#255325] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="García ProCleaners"
              width={160}
              height={54}
              className="h-auto w-32 md:w-40"
            />
          </div>

          {/* Links legales (placeholders) */}
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-white/80 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Copyright */}
          <div className="font-body text-sm text-white/60">
            © {year} García ProCleaners. {t('rights')}
          </div>
        </div>
      </div>
    </footer>
  )
}