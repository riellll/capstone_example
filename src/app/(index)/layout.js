'use client'
import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
import { Fira_Sans } from 'next/font/google'
//import "tw-elements/dist/css/tw-elements.min.css";


const inter = Inter({ subsets: ['latin'] })
const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata = {
  title: 'Home | UCode Clinic',
  description: 'UCode Clinic Home Page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaSans.className} bg-green-200`}>
        <AuthProvider>
          <Navbar/>
          {children}
          <Footer/>
        </AuthProvider>
      </body>
    </html>
  )
}
