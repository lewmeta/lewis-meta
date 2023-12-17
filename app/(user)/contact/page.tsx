import React from 'react'
import { Metadata } from "next"
import Layout from '@/components/Layout'
import Contact from '@/components/Contact/Contact'
import TransitionEffect from '@/components/TransitionEffect'
import Form from '@/components/Contact/Form'

export const metadata: Metadata = {
  title: 'Contact me | Lewis Meta',
  description: 'Reach out so we can work together',
}

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className='w-full min-h-screen'>
        <Layout >
          <Contact />
          <Form/>
        </Layout>
      </main>
    </>
  )
}

export default page