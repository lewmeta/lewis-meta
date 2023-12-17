import Link from "next/link"
import Image from "next/image"
import { FaSearch } from "react-icons/fa"
import urlFor from "@/lib/urlFor"

type Props = {
    post: Post[];
}
const Blog = ({ post }: Props) => {
    return (
        <section className="w-full mt-[50px]">
            <div className="w-full dark:text-textDark dark:opacity-70 mb-8 text-ligthText/90 flex items-center">
                <Link href={"/"} className="uppercase opacity-100">Home</Link>
                <p className="pl-3 uppercase">- My published articles</p>
            </div>
            <div className="w-full flex flex-wrap">
                <div className="lg:w-[75%]">
                    <div className="flex flex-wrap w-full ">
                        {post.map((item, index) => (
                            <div className="lg:w-[50%] w-full lg:pr-6 mb-10 lg:mb-0" key={index}>
                                <div className="w-full group transition-all duration-300 ease-linear  rounded-md overflow-hidden">
                                    <div className="w-full h-[300px]  overflow-hidden relative transition-all  ease duration-300 ">
                                        <div className="content-[] absolute  z-20 top-[15px] left-[15px] right-[15px] bottom-[15px] bg-black/[0.51] opacity-0  group-hover:visible invisible group-hover:opacity-100 transition-all duration-300 ease-linear" />
                                        <div className="absolute top-[-30%] left-1/2 w-[50px] h-[50px] ml-[-20px] mt-[-20px] rounded-full z-30 cursor-pointer group-hover:top-1/2 transition-all duration-300 ease-linear bg-white/[0.41] flex items-center">
                                            <div className="content-[] absolute w-[38px] h-[38px] left-1/2  ml-[-19px] rounded-full bg-blueColor flex items-center justify-center">
                                                <FaSearch className="text-base text-white" />
                                            </div>
                                        </div>
                                        <Link href={`/blog/blog-details/${item.slug.current}`} className="absolute top-0 left-0 w-full h-full" />
                                        <Image src={urlFor(item.mainImage).url()} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," width={800} height={800} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-full border border-black/[0.09] dark:border-white/[0.09] border-t-0 pt-[18px] px-[18px] pb-[30px] relative transition-all ease-linear duration-300 ">
                                        <div className="content-[] absolute right-[20px] top-1/2 left-[60%] h-[1px] dark:bg-white/[0.2] bg-black/[0.2] " />
                                        <div className="content-[] absolute right-[20px] top-1/2 w-[50px] h-[4px] mt-[-2px] transition-all  duration-300  bg-blueColor group-hover:left-[50%]" />
                                        <h3 className="py-[10px] pb-[2px] relative text-base dark:text-white text-black font-semibold hover:dark:text-blueColor hover:text-blueColor transition-all duration-300 ease-linear">
                                            <Link href={`/blog/blog-details/${item.slug.current}`} className="">{item.title}</Link>
                                        </h3>
                                        <span className="font-medium flex gap-4 item-center capitalize text-primaryText text-xs pt-2" >
                                            {item.tags.map((tag, index) => (
                                                <p className="" key={index}>{tag.title} </p>
                                            ))}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="lg:w-[25%] w-full">
                    <div className="p-[20px] w-full overflow-hidden rounded-md border dark:border-white/[0.2] border-dark/[0.2] ">content left</div>
                </div>
            </div>
        </section>
    )
}

export default Blog