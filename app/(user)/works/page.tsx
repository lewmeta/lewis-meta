import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Works from '@/components/Works/Works'
import TransitionEffect from '@/components/TransitionEffect'
import { client } from '@/lib/sanity.client'
import { projectQuery } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'My work | Lewis Meta',
  description: 'Learn more about my work',
}

const project = await client.fetch(projectQuery)

const page = () => {
  return (
    <>
      <TransitionEffect />
      <main className='w-full min-h-screen'>
        <Layout >
          <Works project={project}/>
        </Layout>
      </main>
    </>
  )
}

export default page