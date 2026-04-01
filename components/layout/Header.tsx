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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          {/* Logo / Burger Menu */}
          <div className="flex items-center gap-2">
            {/* Mobile burger menu */}
            <button
              className="md:hidden p-2 text-[#255325]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Mobile logo text */}
            <Link href={`/${locale}`} className="md:hidden flex flex-col text-[#255325] font-display">
              <span className='font-black text-lg leading-none tracking-wider'>GARCÍA</span>
              <span className='text-xs leading-none'>Pro-Cleaners</span>
            </Link>

            {/* Desktop logo */}
            <Link href={`/${locale}`} className="hidden md:flex items-center">
              <article className='flex flex-row items-center gap-2'>
                <Image
                  src="/images/logo.jpg"
                  alt="García ProCleaners"
                  width={140}
                  height={48}
                  priority
                  className="h-auto w-12 sm:w-15"
                />
                <div className='flex flex-col text-[#255325] font-display'>
                  <h1 className='font-black text-3xl leading-none tracking-wider'>GARCÍA</h1>
                  <h2 className='font-extrabold leading-none'>PRO CLEANERS</h2>
                </div>
              </article>
            </Link>
          </div>


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

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="flex flex-col px-4 py-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-body font-medium text-gray-700 hover:bg-[#9AC182]/50 transition-colors duration-200 p-3 rounded-md"
                >
                  {t(item.key as keyof typeof t)}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  onContactClick()
                }}
                className="font-body font-semibold text-sm bg-[#255325] text-white px-5 py-3 rounded-full shadow-sm shadow-gray-600 hover:bg-[#1a3d1a] transition-colors duration-200 cursor-pointer mt-2"
              >
                {locale === 'en' ? 'Get Quote' : 'Presupuesto'}
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  toggleLocale()
                }}
                className="font-body font-semibold text-sm text-[#255325] hover:opacity-70 cursor-pointer transition-opacity p-3"
              >
                {locale.toUpperCase()}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}