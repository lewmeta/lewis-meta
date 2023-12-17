import Layout from '@/components/Layout'
import Header from '@/components/Services/Header'
import Services from '@/components/Services/Services'
import TransitionEffect from '@/components/TransitionEffect'
import React from 'react'

const page = () => {
    return (
        <>
            <TransitionEffect />
            <main className='w-full min-h-screen'>
                <Header/>
                <Services/>
            </main>
        </>
    )
}

export default page