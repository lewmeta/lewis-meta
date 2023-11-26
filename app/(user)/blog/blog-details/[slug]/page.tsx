import { Metadata } from "next"
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import BlogDetails from "@/components/Blog/BlogDetails";

export const metadata: Metadata = {
    title: 'My articles | Lewis Meta',
    description: 'Learn more about me and my published articles',
}

export default function Page() {
    return (
        <>
            <TransitionEffect />
            <main className='w-full min-h-screen pt-16'>
                <Layout className='h-full'>
                    <BlogDetails />
                </Layout>
            </main>
        </>
    )
}