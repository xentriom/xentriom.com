import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | xentriom',
    default: 'xentriom',
  },
  description: 'Exploring the web, one idea at a time',
  openGraph: {
    description: 'Exploring the web, one idea at a time',
    url: 'https://xentriom.com',
    siteName: 'xentriom',
    images: [
      {
        url: 'https://xentriom.com/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'xentriom',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'xentriom',
    description: 'Exploring the web, one idea at a time',
    images: ['https://xentriom.com/opengraph-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
