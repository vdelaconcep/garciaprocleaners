// app/[locale]/HomeClient.tsx
'use client'

import { useState, useEffect } from 'react'
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

interface SheetData {
    phone: string
    email: string
    whatsapp: string
    whatsappMessageEN: string
    whatsappMessageES: string
}

interface HomeClientProps {
    locale: string
    phone: string
    email: string
    whatsapp: string
    whatsappMessageEN: string
    whatsappMessageES: string
}

export function HomeClient({ locale: initialLocale, phone: initialPhone, email: initialEmail, whatsapp: initialWhatsapp, whatsappMessageEN: initialWhatsappMessageEN, whatsappMessageES: initialWhatsappMessageES }: HomeClientProps) {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const [sheetData, setSheetData] = useState<SheetData>({
        phone: initialPhone,
        email: initialEmail,
        whatsapp: initialWhatsapp,
        whatsappMessageEN: initialWhatsappMessageEN,
        whatsappMessageES: initialWhatsappMessageES,
    })

    // Fetch fresh data when modal opens
    useEffect(() => {
        if (isContactModalOpen) {
            const fetchData = async () => {
                try {
                    const res = await fetch('/api/sheet-data?nocache=' + Date.now())
                    if (res.ok) {
                        const data = await res.json()
                        setSheetData(data)
                    }
                } catch (error) {
                    console.error('Error fetching sheet data:', error)
                }
            }
            fetchData()
        }
    }, [isContactModalOpen])

    const handleContactClick = () => setIsContactModalOpen(true)

    return (
        <>
            <Header locale={initialLocale} onContactClick={handleContactClick} />
            <main className='relative'>
                <Hero onContactClick={handleContactClick} />
                <Services />
                <Features />
                <Promo onContactClick={handleContactClick} />
                <ServiceAreas />
                <FAQ />
                <FloatingButton onClick={handleContactClick} />
            </main>
            <Footer />
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
                phone={sheetData.phone}
                email={sheetData.email}
                whatsapp={sheetData.whatsapp}
                whatsappMessageEN={sheetData.whatsappMessageEN}
                whatsappMessageES={sheetData.whatsappMessageES}
            />
            
        </>
    )
}