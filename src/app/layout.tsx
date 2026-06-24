import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr',
})

export const metadata: Metadata = {
  title: '농협정보시스템',
  description: '농협정보시스템은 농업과 IT 기술의 융합으로 디지털 농업 환경을 선도합니다.',
  keywords: '농협정보시스템, NH IT, 농업IT, 시스템구축, ITO서비스, IT서비스',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${notoSansKR.variable}`}>
      <body className="font-[var(--font-noto-sans-kr)] min-h-screen flex flex-col antialiased">
        <Header />
        <main id="main-content" className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
