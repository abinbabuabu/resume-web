import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Abin Babu',
  description: 'Abin Babu is a software Engineer',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`container bg-primary font-sans scroll-smooth mx-auto ${inter.className}`} lang="en">
      <>{children}</>
    </html>
  )
}
