import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata : Metadata = {
  title: {
    default: 'Shuhua Liu',
    template: '%s | Shuhua Liu',
  },
  description: 'Full stack developer',
  icons: {
    shortcut: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
