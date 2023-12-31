import Layout from '@/components/Layout'
import Header from '@/components/Services/Header'
import Services from '@/components/Services/Services'
import TransitionEffect from '@/components/TransitionEffect'
import { servicesHeaderQuery, servicesQuery } from '@/lib/queries'
import { client } from '@/lib/sanity.client'
import React from 'react'

const experience = await client.fetch(servicesQuery)
const serviceHeader = await client.fetch(servicesHeaderQuery)

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