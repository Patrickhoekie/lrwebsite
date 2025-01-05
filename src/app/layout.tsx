'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Loyal Roots',
  description: 'We groeien samen, vanaf de roots.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <html lang="nl">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Toaster position="top-center" />
        </div>
      </body>
    </html>
  )
}

