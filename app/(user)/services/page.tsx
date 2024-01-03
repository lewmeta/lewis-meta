import Layout from '@/components/Layout'
import Header from '@/components/Services/Header'
import Services from '@/components/Services/Services'
import TransitionEffect from '@/components/TransitionEffect'
import { servicesHeaderQuery, servicesQuery } from '@/lib/queries'
import { client } from '@/lib/sanity.client'
import { urlForOpenGraph } from '@/lib/urlFor'
import { Metadata } from 'next'
import React from 'react'

const experience = await client.fetch(servicesQuery)
const serviceHeader = await client.fetch(servicesHeaderQuery)

export async function generateMetadata(): Promise<Metadata> {

    const servicemeta: MyServices[] = await client.fetch(servicesQuery)
    const servicedata = servicemeta[0].ogmetadatas[0]
    const ogImage = urlForOpenGraph(servicedata.ogImage)
  
    return {
        title: `${servicedata.title}`,
        description: `${servicedata.description}`,
        authors:[ {name: `${servicedata.authors[0].name}`, url:"" }, ] ,
        openGraph: {
            type: 'website',
            title: `${servicedata.title}`,
            description: `${servicedata.description}`,
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
                <Header serviceHeader={serviceHeader}/>
                <Services experience={experience}/>
            </main>
        </>
    )
}

export default page