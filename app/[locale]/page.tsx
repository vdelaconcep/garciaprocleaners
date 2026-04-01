'use client'

import { useState, useEffect, use } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Features } from '@/components/sections/Features'
import { Promo } from '@/components/sections/Promo'
import { ServiceAreas } from '@/components/sections/ServiceAreas'
import { FAQ } from '@/components/sections/FAQ'
import { ContactModal } from '@/components/ContactModal'
import { FloatingButton } from '@/components/FloatingButton'

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const locale = resolvedParams.locale

  const handleContactClick = () => {
    setIsContactModalOpen(true)
  }

  return (
    <>
      <Header locale={locale} onContactClick={handleContactClick} />
      <main>
        <Hero onContactClick={handleContactClick} />
        <Services />
        <Features />
        <Promo onContactClick={handleContactClick} />
        <ServiceAreas />
        <FAQ />
      </main>
      <Footer />
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
      <FloatingButton onClick={handleContactClick} />
    </>
  )
}