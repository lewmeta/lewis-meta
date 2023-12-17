import React from 'react'
import { Metadata } from 'next'
import Layout from '@/components/Layout'
import About from '@/components/About/About'
import TransitionEffect from '@/components/TransitionEffect'
import Experience from '@/components/About/Experience'
import Achievement from '@/components/About/Achievement'
import { client } from '@/lib/sanity.client'
import { aboutIntroQuery, achievementsQuery, experienceQuery } from '@/lib/queries'

export const metadata: Metadata = {
    title: 'About me | Lewis Meta',
    description: 'Learn more about Lewis Meta',
}

const aboutintro = await client.fetch(aboutIntroQuery)
const achievements = await client.fetch(achievementsQuery)
const experience = await client.fetch(experienceQuery)


const page = () => {
    return (
        <>
         <TransitionEffect />
        <main className='w-full min-h-screen h-full'>
            <Layout className=''>
                <About aboutintro={aboutintro}/>
                <Achievement achievements={achievements}/>
                <Experience experience={experience}/>
            </Layout>
        </main>
        </>
    )
}

export default page