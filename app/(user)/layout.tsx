import type { Metadata } from 'next'
import '../globals.css'
import { Lexend_Deca, Caveat } from 'next/font/google'
import Provider from '@/components/Hooks/Provider'
import AnimatePresenc from '@/components/AnimatePresence'
import NavFetch from '@/components/Home/navFetch'
import FooterFetch from '@/components/Home/footerFetch'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { urlForOpenGraph } from '@/lib/urlFor'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'

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


export async function generateMetadata(): Promise<Metadata> {
  // const homeQuery = groq`*[_type == "home"]{
  //   ogImage,
  //   ..., 
  //  //  pdf.asset->url
  //  "pdf": pdf.asset->url,
  // }`
  // const data: HomeProps[] = await client.fetch(homeQuery)
  // const dataInfo = data[0]
  // const ogImage = urlForOpenGraph(data[0].ogImage)

  return {
    title: `Lewis meta - Personal website`,
    description: `Welcome to the world of code. Hello I am Lewis and this is my world`,
    // openGraph: {
    //   type: 'website',
    //   title: `${dataInfo?.name} Personal website`,
    //   description: "Welcome to my portfolio website. Get to know me better",
    //   siteName: 'lewismeta',
    //   images: ogImage ? [ogImage] : [],
    // },
  }
}

export const revalidate = 0;

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
