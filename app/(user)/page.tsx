import AboutIntro from '@/components/Home/AboutIntro'
import Achievement from '@/components/Home/Achievement'
import Hireme from '@/components/Home/Hireme'
import Home from '@/components/Home/Home'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import { homeQuery } from '@/lib/queries'
import { client } from '@/lib/sanity.client'

const home = await client.fetch(homeQuery)

export default function Page() {
  return (
    <>
      <TransitionEffect />
      <main className='w-full pt-16'>
        <Layout className='h-full'>
          <Home home={home}/>
          {/* <AboutIntro /> */}
          {/* <Hireme/> */}
          {/* <Achievement /> */}
        </Layout>
      </main>
    </>
  )
}
