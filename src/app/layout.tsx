import './globals.css'
import type { Metadata } from 'next'
import { Inter, Noto_Sans_Bengali } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { SiteHeader } from '@/components/site-header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bengali = Noto_Sans_Bengali({ 
  subsets: ['bengali'],
  variable: '--font-bengali',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'Arvion Tech | Leading eCommerce Platform in Bangladesh',
  description: 'Shop the latest tech products with fast delivery across Bangladesh. Best prices on mobiles, laptops, and electronics.',
  keywords: 'ecommerce, bangladesh, tech, electronics, online shopping'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bengali.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}