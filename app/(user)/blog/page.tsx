import Blog from "@/components/Blog/Blog";
import {Metadata} from "next"
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";

export const metadata: Metadata = {
    title: 'My articles | Lewis Meta',
    description: 'Learn more about me and my credentials',
    openGraph: {
        title: 'My articles',
        description: 'Learn more about me and my credentials',
        type: 'article',
        publishedTime: '2023-01-01T00:00:00.000Z',
        authors: ['Lewis', 'Meta'],
    },
  }
  
export default function Page() {
    return (
        <>
            <TransitionEffect />
            <main className='w-full min-h-screen pt-16'>
                <Layout className='h-full'>
                    <Blog />
                </Layout>
            </main>
        </>
    )
}