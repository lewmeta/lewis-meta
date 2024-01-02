"use client"

import Link from "next/link"
import Image from "next/image"
import urlFor from "@/lib/urlFor"
import { RichTextComponent } from "../RichTextComponent"
import { PortableText } from "@portabletext/react"
import Refractor from 'react-refractor'
import js from 'refractor/lang/javascript'
import ts from 'refractor/lang/typescript'
import py from 'refractor/lang/python'
import Highlight from 'prism-react-renderer';
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { useState } from "react"
import Search from "./Search"
import Comment from "./Comment"



type Props = {
    post: Post;
    posts: Post[];
}

Refractor.registerLanguage(js)
Refractor.registerLanguage(ts)
Refractor.registerLanguage(py)

const BlogDetails = ({ post, posts }: Props) => {
    
    console.log("BLOGS", post.codeInput)
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [showSearch, setShowSearch] = useState(false);

    const handleSearch = () => {
        searchQuery
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        handleSearch();
    }
    
    return (
        <section className="w-full">
            <h1 className="lg:text-[56px] lg:leading-[70px] md:text-[46px] md:leading-[60px] sm:text-[35px] sm:leading-[45px] text-[28px] leading-[35px] relative mb-7 font-semibold gap-6 dark:text-white text-ligthText flex items-center lg:w-[85%] w-full">
                {post.title}
            </h1>
            <div className="flex flex-wrap w-full md:pt-[60px] pt-[30px] lg:pt-[40px]">
                <div className="lg:w-[66.6667%] w-full lg:pr-[55px] mb-10 lg:mb-0 z-10 ">
                    <div className="w-full md:h-[300px] sm:h-[250px] h-[200px] lg:h-[400px] mb-[70px] overflow-hidden relative rounded-3xl">
                        <Image src={urlFor(post.mainImage).url()} alt='start-img' priority width={800} height={800} sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full flex items-center text-blueColor text-base font-normal leading-[16.8px] mb-8 gap-1">
                        {new Date(post._createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric', weekday: 'long' })} -
                        <ul className="">
                            {post.categories.map((item, index) => (
                                <li className="text-primaryText font-semibold break-words w-full" key={index}>
                                    <span className='font-medium dark:text-white/80 text-ligthText text-base'>{item.title}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <PortableText value={post.body} components={RichTextComponent} />
                    {post.codeInput.map((codex, index) => (
                        <div className="mt-7" key={index}>
                            <div className="">

                            <PortableText value={codex.body} components={RichTextComponent} />

                            {codex.myCodeField && (
                                <div className="">
                                    <span className="text-sm dark:text-textDark text-ligthText/70 ">{codex.myCodeField.filename}.tsx</span>
                                    <Refractor
                                        language={codex.myCodeField.language}
                                        value={codex.myCodeField.code}
                                    />
                                </div>

                            )}
                            </div>
                        </div>

                    ))}

                    <div className="z-[199]">
                        <Comment/>
                    </div>
                </div>

                <div className="lg:w-[33.3333%] w-full">
                    <div className="w-full sticky top-[20%]">
                        <div className="mb-10 relative w-full dark:bg-black rounded-3xl pt-[46px] pr-[30px] pb-[62px] pl-[30px] bg-white">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight opacity-25 rounded-3xl !-z-0' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30' />
                            <form action="" className="relative z-30 w-full" role="search" onSubmit={handleSubmit} >
                                <label htmlFor="search" className="mb-2.5 block -mt-0.5 z-20 ">Search here</label>
                                <div className="relative border border-solid border-[#e7e7e7] rounded-md flex max-w-full flex-nowrap bg-white">
                                    <input type="text" className="border-none bg-white p-3.5 min-h-[60px] w-full outline-none"
                                     placeholder="Enter your seach here ..." 
                                     required 
                                     value={searchQuery}
                                     onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button 
                                    onClick={handleSearch}

                                    className="absolute right-1.5 w-auto top-1.5 text-sm z-30 rounded-md  capitalize transition-all duration-300 ease-in bg-blueColor text-white px-5 min-h-[50px] tracking-widest">Search</button>
                                </div>
                            </form>

                            <div className="mt-5 z-30">
                                <Search searchQuery={searchQuery}/>
                            </div>
                        </div>
                        <div className="mb-10 relative w-full dark:bg-black rounded-3xl pt-[46px] pr-[30px] pb-[62px] pl-[30px] bg-white">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30' />
                            <h1 className="dark:text-textDark font-medium dark:opacity-50 text-lg uppercase mb-7 text-ligthText/70">Recent Posts</h1>
                            <ul className="list-none relative z-20">
                                {posts.map((item, index) => (
                                    <li className="border-b  border-solid border-[#dbdfe4] mb-3.5 pb-3.5 text-sm leading-6" key={index}>
                                        <Link href={`/blog/blog-details/${item.slug.current}`} className="block leading-6 text-base dark:text-white text-ligthText opacity-80 hover:text-blueColor transition-all duration-300 ease-in">{item.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="mb-10 relative w-full dark:bg-black rounded-3xl pt-[46px] pr-[30px] pb-[62px] pl-[30px] bg-white">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30' />
                            <h1 className="dark:text-textDark font-medium dark:opacity-50 text-lg uppercase mb-7 text-ligthText/70">Recent comments</h1>
                            <p className="">No comment yet, be the first to comment !</p>
                        </div>
                        <div className="mb-10 relative w-full dark:bg-black rounded-3xl pt-[46px] pr-[30px] pb-[62px] pl-[30px] bg-white">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30' />
                            <h1 className="dark:text-textDark font-medium dark:opacity-50 text-lg uppercase mb-7 text-ligthText/70">Recent comments</h1>
                            <h1 className="font-medium dark:text-white/80 text-ligthText text-base">June 2023</h1>
                        </div>
                        <div className="mb-10 relative w-full dark:bg-black rounded-3xl pt-[46px] pr-[30px] pb-[62px] pl-[30px] bg-white">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30' />
                            <h1 className="dark:text-textDark font-medium dark:opacity-50 text-lg uppercase mb-7 text-ligthText/70">Categories</h1>
                            <ul className="w-full">
                                {post.categories.map((item, index) => (
                                    <li className="text-primaryText font-semibold p-1 break-words w-full" key={index}>
                                        <div className="content-[] inline-block align-middle w-[6px] h-[6px] border-t border-t-blueColor border-l border-l-blueColor transform rotate-[135deg] mr-[12.5px] transition-all duration-500 relative" />
                                        <span className='font-medium dark:text-white/80 text-ligthText text-base'>{item.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetails