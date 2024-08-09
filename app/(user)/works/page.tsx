import React from 'react'
import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import Works from '@/components/Works/Works'
import TransitionEffect from '@/components/TransitionEffect'
import { client } from '@/lib/sanity.client'
import { projectQuery } from '@/lib/queries'
import { urlForOpenGraph } from '@/lib/urlFor'


const project = await client.fetch(projectQuery)

export async function generateMetadata(): Promise<Metadata> {

  const credentialsmeta: Projects[] = await client.fetch(projectQuery)
  const credentialsdata = credentialsmeta[0].ogmetadatas[0]
  const ogImage = urlForOpenGraph(credentialsdata.ogImage)

  return {
    title: `${credentialsdata.title}`,
    description: `${credentialsdata.description}`,
    authors: [{ name: `${credentialsdata.authors[0].name}`, url: "" },],
    openGraph: {
      type: 'website',
      title: `${credentialsdata.title} - ${credentialsdata.description}`,
      description: `${credentialsdata.description}`,
      siteName: 'lewismeta',
      images: ogImage ? [ogImage] : [],
    },
  }
}


const Page = () => {
  console.log({ project })
  return (
    <>
      <TransitionEffect />
      <main className='w-full min-h-screen'>
        <Layout >
          <Works project={project} />
        </Layout>
      </main>
    </>
  )
}
export const dynamic = "force-dynamic";

export default Page