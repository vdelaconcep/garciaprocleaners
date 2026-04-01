// app/[locale]/page.tsx
import { getSheetData } from '@/lib/sheets'
import { HomeClient } from './HomeClient'

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const data = await getSheetData()

  return <HomeClient
      locale={locale}
      phone={data.phone}
      email={data.email}
      whatsapp={data.whatsapp}
      whatsappMessageEN={data.whatsappMessageEN}
      whatsappMessageES={data.whatsappMessageES}
    />
}