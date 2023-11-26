import AboutIntro from '@/components/Home/AboutIntro'
import Achievement from '@/components/Home/Achievement'
import Home from '@/components/Home/Home'
import Layout from '@/components/Layout'

export default function Page() {
  return (
    <main className='w-full min-h-screen pt-16'>
      <Layout className='h-full'>
        <Home />
        <AboutIntro/>
        <Achievement/>
      </Layout>
    </main>
  )
}
