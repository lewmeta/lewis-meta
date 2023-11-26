import React from 'react'
import { Metadata } from 'next'
import Layout from '@/components/Layout'
import About from '@/components/About/About'
import TransitionEffect from '@/components/TransitionEffect'
import Experience from '@/components/About/Experience'
import Reachout from '@/components/About/Reachout'

export const metadata: Metadata = {
    title: 'About me | Lewis Meta',
    description: 'Learn more about Lewis Meta',
}

const page = () => {
    return (
        <>
         <TransitionEffect />
        <main className='w-full min-h-screen h-full'>
            <Layout className=''>
                <About />
                <Experience/>
                <Reachout/>
            </Layout>
        </main>
        </>
    )
}

export default page