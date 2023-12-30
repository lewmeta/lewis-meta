import type { Metadata } from 'next'
import '../globals.css'
import { Lexend_Deca, Caveat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Provider from '@/components/Hooks/Provider'
import AnimatePresenc from '@/components/AnimatePresence'
import NavFetch from '@/components/Home/navFetch'
import FooterFetch from '@/components/Home/footerFetch'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify'

const lexend_deca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lex',
  display: 'swap',
  // adjustFontFallback: false
})
const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  // adjustFontFallback: false,
  variable: "--font-cav"
})


export const metadata: Metadata = {
  title: 'Lewis Meta | Portfolio website',
  description: 'Welcome to my portfolio website. Lets work together',
  referrer: 'origin-when-cross-origin',
  keywords: ['lewis', 'meta', 'lewismeta', 'lewisonyango'],
  authors: [{ name: 'Lewis' }, { name: 'Meta', url: 'https://lewmeta.vercel.com' }],
  creator: 'Lewis Meta',
  publisher: 'Lewis Meta',
  openGraph: {
    type: 'website',
    url: 'https://lewmeta.vercel.com',
    title: 'Lewis Meta Portfolio',
    description: "Welcome to my portfolio website. Let's connect",
    siteName: 'Lew Meta',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${lexend_deca.variable} font-lex bg-lightBlue dark:bg-black dark:text-primaryText text-dark leading-5 scroll-smooth text-sm font-normal`}>
        <Provider>
          <NavFetch />
          <AnimatePresenc>
            <main >
              {children}
              <ToastContainer position="top-right" />
            </main>
          </AnimatePresenc>
          <FooterFetch />
        </Provider>
      </body>
    </html>
  )
}
