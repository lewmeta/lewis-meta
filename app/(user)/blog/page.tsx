import Blog from "@/components/Blog/Blog";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { client } from "@/lib/sanity.client";
import { postQuery } from "@/lib/queries";
import { Metadata } from "next";
import { urlForOpenGraph } from "@/lib/urlFor";

const post = await client.fetch(postQuery)

export async function generateMetadata(): Promise<Metadata> {

    const postmeta: Post[] = await client.fetch(postQuery)
    const postdata = postmeta[0].ogmetadatas[0]
    const ogImage = urlForOpenGraph(postdata.ogImage)

    return {
        title: `${postdata.title}`,
        description:  `${postdata.description}`,
        openGraph: {
            type: 'website',
            title: `${postdata.title}`,
            description: `${postdata.description}`,
            siteName: 'lewismeta',
            images: ogImage ? [ogImage] : [],
        },
    }
}


export default function Page() {
    return (
        <>
            <TransitionEffect />
            <main className='w-full min-h-screen '>
                <Layout className='h-full'>
                    <Blog post={post}/>
                </Layout>
            </main>
        </>
    )
}