import { Metadata } from "next"
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import BlogDetails from "@/components/Blog/BlogDetails";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import { postQuery } from "@/lib/queries";

type Props = {
    params: {
        slug: string
    };
};

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const slug = params.slug;

    // Fetch the single cause data
    const query = groq`*[_type=="post" && slug.current == $slug][0]{
      title, // Ensure title is fetched
      description, // Ensure description is fetched
      ...
    }`;
    const singlecause: Post = await client.fetch(query, { slug });

    return {
        title: `Blog Details | ${singlecause?.title}`,
        description: singlecause?.description,
    };
}


export async function generateStaticParams() {

    const query = groq`*[_type == "post"]
  {
    slug,
  }`;

    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);
    return slugRoutes.map((slug) => ({
        slug,
    }))

}

export default async function Page({ params: { slug }, }: Props) {

    const query = groq`*[_type=="post" && slug.current == $slug][0]{
      ...,
      "tags": tags[]-> {
      title,
      slug,
    },
    "authors": authors[]->{
      name, 
      image,
      description,
      "socials": socials[]->{
          platform,
          url
      }
    },
    "postTags": postTags[]->{title,slug },
    "categories": categories[]->{title,number}
  }`;

    const post: Post = await client.fetch(query, { slug })

    const posts = await client.fetch(postQuery)



    return (
        <>
            <TransitionEffect />
            <main className='w-full min-h-screen pt-16'>
                <Layout className='h-full'>
                    <BlogDetails post={post} posts={posts}/>
                </Layout>
            </main>
        </>
    )
}

