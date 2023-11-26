import React from 'react'
import { Metadata } from "next"
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Credentials from '@/components/About/Credentials'

export const metadata: Metadata = {
  title: 'My credentials | Lewis Meta',
  description: 'Learn more about me and my credentials',
}

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className='w-full min-h-screen'>
        <Layout >
          <Credentials />
        </Layout>
      </main>
    </>
  )
}

export default page