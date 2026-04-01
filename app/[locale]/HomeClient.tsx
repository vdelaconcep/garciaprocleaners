// app/[locale]/HomeClient.tsx
'use client'

import { useState } from 'react'
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

interface Contact {
    phone: string
    email: string
}

interface HomeClientProps {
    locale: string
    phone: string
    email: string
    whatsapp: string
    whatsappMessageEN: string
    whatsappMessageES: string
}

export function HomeClient({ locale, phone, email, whatsapp, whatsappMessageEN, whatsappMessageES }: HomeClientProps) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)

    const handleContactClick = () => setIsContactModalOpen(true)

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
            phone={phone}
            email={email}
            whatsapp={whatsapp}
            whatsappMessageEN={whatsappMessageEN}
            whatsappMessageES={whatsappMessageES}
        />
        <FloatingButton onClick={handleContactClick} />
        </>
    )
}