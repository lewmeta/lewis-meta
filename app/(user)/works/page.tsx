import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Works from '@/components/Works/Works'
import TransitionEffect from '@/components/TransitionEffect'

export const metadata: Metadata = {
  title: 'My work | Lewis Meta',
  description: 'Learn more about my work',
}
const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className='w-full min-h-screen'>
        <Layout >
          <Works />
        </Layout>
      </main>
    </>
  )
}

export default page