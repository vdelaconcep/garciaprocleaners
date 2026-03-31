'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeaderProps {
  locale: string
  onContactClick: () => void
}

export function Header({ locale, onContactClick }: HeaderProps) {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { key: 'services', href: '#services' },
    { key: 'features', href: '#features' },
    { key: 'areas', href: '#areas' },
    { key: 'faq', href: '#faq' },
  ]

  const toggleLocale = () => {
    const newLocale = locale === 'en' ? 'es' : 'en'
    const currentPath = pathname.replace(`/${locale}`, '')
    window.location.href = `/${newLocale}${currentPath || '/'}`
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <article className='flex flex-row items-center gap-2'>
            <Link href={`/${locale}`} className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="García ProCleaners"
              width={140}
              height={48}
              priority
              className="h-auto w-12 sm:w-15"
            />
            </Link>
            <div className='flex flex-col text-[#255325] font-display'>
              <h1 className='font-black text-2xl leading-none tracking-wider'>GARCÍA</h1>
              <h2 className='leading-none'>Pro-Cleaners</h2>
            </div>
          </article>
          

          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="font-body font-medium text-gray-700 hover:bg-[#9AC182]/50 transition-colors duration-200 p-2 rounded-md"
              >
                {t(item.key as keyof typeof t)}
              </a>
            ))}
          </nav>

          {/* Selector de idioma y CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLocale}
              className="font-body font-semibold text-sm text-[#255325] hover:opacity-70 cursor-pointer transition-opacity"
              aria-label="Toggle language"
            >
              {locale.toUpperCase()}
            </button>
            <button
              onClick={onContactClick}
              className="hidden sm:block font-body font-semibold text-sm bg-[#255325] text-white px-5 py-2.5 rounded-full shadow-sm shadow-gray-600 hover:bg-[#1a3d1a] transition-colors duration-200 cursor-pointer"
            >
              {locale === 'en' ? 'Get Quote' : 'Presupuesto'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}