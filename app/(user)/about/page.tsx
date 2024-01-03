import React from 'react'
import { Metadata } from 'next'
import Layout from '@/components/Layout'
import About from '@/components/About/About'
import TransitionEffect from '@/components/TransitionEffect'
import Experience from '@/components/About/Experience'
import Achievement from '@/components/About/Achievement'
import { client } from '@/lib/sanity.client'
import { aboutIntroQuery, achievementsQuery, experienceQuery } from '@/lib/queries'
import { urlForOpenGraph } from '@/lib/urlFor'

const aboutintro = await client.fetch(aboutIntroQuery)
const achievements = await client.fetch(achievementsQuery)
const experience = await client.fetch(experienceQuery)

export async function generateMetadata(): Promise<Metadata> {

    const aboutmeta: AboutIntro[] = await client.fetch(aboutIntroQuery)
    const aboutme = aboutmeta[0]
    const ogImage = urlForOpenGraph(aboutme.ogmetadatas[0].ogImage)

    return {
        title: `${aboutme.ogmetadatas[0].title}`,
        description: `${aboutme.ogmetadatas[0].description}`,
        openGraph: {
            type: 'website',
            title: `${aboutme.ogmetadatas[0].title}`,
            description: `${aboutme.ogmetadatas[0].description}`,
            siteName: 'lewismeta',
            images: ogImage ? [ogImage] : [],
        },
    }
}



const page = () => {
    return (
        <>
            <TransitionEffect />
            <main className='w-full min-h-screen h-full'>

                <Layout className=''>
                    <About aboutintro={aboutintro} />
                    <Achievement achievements={achievements} />
                    <Experience experience={experience} />
                </Layout>
            </main>
        </>
    )
}

export default page