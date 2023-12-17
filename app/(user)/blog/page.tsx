import Blog from "@/components/Blog/Blog";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Header from "@/components/Blog/Header";
import { client } from "@/lib/sanity.client";
import { postQuery } from "@/lib/queries";
import { Metadata } from "next";

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
  
const post = await client.fetch(postQuery)

export default function Page() {
    return (
        <>
            <TransitionEffect />
            <main className='w-full min-h-screen '>
                {/* <Header/> */}
                <Layout className='h-full'>
                    <Blog post={post}/>
                </Layout>
            </main>
        </>
    )
}