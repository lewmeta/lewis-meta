import React from 'react'
import { Metadata } from "next"
import Layout from '@/components/Layout'
import Contact from '@/components/Contact/Contact'
import TransitionEffect from '@/components/TransitionEffect'
import Form from '@/components/Contact/Form'
import { client } from '@/lib/sanity.client'
import { contactInfoQuery, infoTimesQuery } from '@/lib/queries'
import { urlForOpenGraph } from '@/lib/urlFor'

const contactInfo:ContactInfo[] = await client.fetch(contactInfoQuery)
const infoTimes = await client.fetch(infoTimesQuery)

export async function generateMetadata(): Promise<Metadata> {

  const contactmeta: ContactInfo[] = await client.fetch(contactInfoQuery)
  const contactdata = contactmeta[0].ogmetadatas[0]
  const ogImage = urlForOpenGraph(contactdata.ogImage)

  return {
      title: `${contactdata.title} `,
      description: `${contactdata.description}`,
      openGraph: {
          type: 'website',
          title: `${contactdata.title}`,
          description: `${contactdata.description}`,
          siteName: 'lewismeta',
          images: ogImage ? [ogImage] : [],
      },
  }
}

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className='w-full min-h-screen'>
        <Layout >
          <Contact contactInfo={contactInfo}/>
          <Form infoTimes={infoTimes}/>
        </Layout>
      </main>
    </>
  )
}

export default page