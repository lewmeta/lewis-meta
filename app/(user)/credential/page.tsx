import React from 'react'
import { Metadata } from "next"
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import { credentialsQuery, educationQuery, skillsQuery, workexperienceQuery } from '@/lib/queries'
import { client } from '@/lib/sanity.client'
import { urlForOpenGraph } from '@/lib/urlFor'
import Credentials from '@/components/About/Credentials'

const credentials = await client.fetch(credentialsQuery)
const skills = await client.fetch(skillsQuery)
const education = await client.fetch(educationQuery)
const experience = await client.fetch(workexperienceQuery)

export async function generateMetadata(): Promise<Metadata> {

  const credentialsmeta: Credentials[] = await client.fetch(credentialsQuery)
  const credentialsdata = credentialsmeta[0]
  const ogImage = urlForOpenGraph(credentialsdata.ogmetadatas[0].ogImage)

  return {
      title: `${credentialsdata.ogmetadatas[0].title}`,
      description: `${credentialsdata.ogmetadatas[0].description}`,
      authors:[ {name: `${credentialsdata.ogmetadatas[0].authors[0].name}`, url:"" }, ] ,
      openGraph: {
          type: 'website',
          title: `${credentialsdata.ogmetadatas[0].title}`,
          description: `${credentialsdata.ogmetadatas[0].description}`,
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
        <Layout >
          <Credentials credentials={credentials} skills={skills} education={education} experience={experience}/>
        </Layout>
      </main>
    </>
  )
}

export default page