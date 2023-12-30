import React from 'react'
import { Metadata } from "next"
import Layout from '@/components/Layout'
import Contact from '@/components/Contact/Contact'
import TransitionEffect from '@/components/TransitionEffect'
import Form from '@/components/Contact/Form'
import { client } from '@/lib/sanity.client'
import { contactInfoQuery, infoTimesQuery } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Contact me | Lewis Meta',
  description: 'Reach out so we can work together',
}

const contactInfo = await client.fetch(contactInfoQuery)
const infoTimes = await client.fetch(infoTimesQuery)

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