import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar, Footer } from '@/components'
import { ClerkProvider } from '@clerk/nextjs'
 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Auto Garage",
  description: "Discover world's best car showcase application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <ClerkProvider>
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
    </ClerkProvider>
  )
}
