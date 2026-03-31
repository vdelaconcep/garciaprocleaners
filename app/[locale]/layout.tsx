import type { Metadata } from 'next'
import { Raleway, DM_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import '../globals.css'

const raleway = Raleway({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-raleway',
})

const dmSans = DM_Sans({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'García ProCleaners | Professional Cleaning Services',
  description: 'Professional cleaning services in Central Oregon. Homes, offices, restaurants, warehouses and more. Available 24/7, 365 days a year.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const locales = ['en', 'es']

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${raleway.variable} ${dmSans.variable}`}>
      <body className="font-body">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}