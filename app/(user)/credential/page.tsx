import React from 'react'
import { Metadata } from "next"
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Credentials from '@/components/About/Credentials'
import { credentialsQuery, educationQuery, skillsQuery, workexperienceQuery } from '@/lib/queries'
import { client } from '@/lib/sanity.client'

export const metadata: Metadata = {
  title: 'My credentials | Lewis Meta',
  description: 'Learn more about me and my credentials',
}
const credentials = await client.fetch(credentialsQuery)
const skills = await client.fetch(skillsQuery)
const education = await client.fetch(educationQuery)
const experience = await client.fetch(workexperienceQuery)

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