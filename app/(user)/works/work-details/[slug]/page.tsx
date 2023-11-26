import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Works from '@/components/Works/Works'
import TransitionEffect from '@/components/TransitionEffect'
import WorkDetails from '@/components/Works/WorkDetails'

export const metadata: Metadata = {
  title: 'My work details | Lewis Meta',
  description: 'Learn more about my work',
}
const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className='w-full min-h-screen'>
        <WorkDetails/>
      </main>
    </>
  )
}

export default page