import Link from "next/link"
import Image from "next/image"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSearch, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa"
import urlFor from "@/lib/urlFor"

type Props = {
    post: Post[];

}
const Blog = ({ post }: Props) => {

    const firstPost = post.slice(0, 1)
    return (
        <section className="w-full mt-[50px]">
            <div className="w-full dark:text-textDark dark:opacity-70 mb-8 text-ligthText/90 flex items-center font-semibold">
                <Link href={"/"} className="opacity-100">Home</Link>
                <p className="pl-1 "> - My published articles</p>
            </div>
            <div className="w-full flex flex-wrap">
                <div className="lg:w-[75%] w-full">
                    <div className="flex flex-wrap gap-5 w-full">
                        {post.map((item, index) => (
                            <div className="w-full lg:pr-6 mb-10 lg:mb-0" key={index}>
                                <div className="w-full group transition-all duration-300 ease-linear  rounded-md overflow-hidden">
                                    <div className="w-full sm:h-[300px] h-[180px] md:h-[360px] lg:h-[460px]  overflow-hidden relative transition-all  ease duration-300 ">
                                        <div className="content-[] absolute  z-20 top-[15px] left-[15px] right-[15px] bottom-[15px] bg-black/[0.51] opacity-0  group-hover:visible invisible group-hover:opacity-100 transition-all duration-300 ease-linear" />
                                        <div className="absolute top-[-30%] left-1/2 w-[50px] h-[50px] ml-[-20px] mt-[-20px] rounded-full z-30 cursor-pointer group-hover:top-1/2 transition-all duration-300 ease-linear bg-white/[0.41] flex items-center">
                                            <Link href={`/blog/blog-details/${item.slug.current}`} className="content-[] absolute w-[38px] h-[38px] left-1/2  ml-[-19px] rounded-full bg-blueColor flex items-center justify-center">
                                                <FaSearch className="text-base text-white" />
                                            </Link>
                                        </div>
                                        <Link href={`/blog/blog-details/${item.slug.current}`} className="absolute top-0 left-0 w-full h-full" />
                                        <Image src={urlFor(item.mainImage).url()} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," width={800} height={800} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="w-full border border-black/[0.09] dark:border-white/[0.09] border-t-0 pt-[18px] px-[18px] pb-[30px] relative transition-all ease-linear duration-300 ">
                                        <div className="flex justify-between md:flex-row flex-col items-start">
                                            <h1 className="py-[10px] pb-[2px] relative text-base dark:text-white text-black font-semibold hover:dark:text-blueColor hover:text-blueColor transition-all duration-300 ease-linear">
                                                <Link href={`/blog/blog-details/${item.slug.current}`} className="">{item.title}</Link>
                                            </h1>
                                            <span className="font-medium flex gap-4 item-center capitalize text-primaryText text-xs pt-2" >
                                                {item.tags.map((tag, index) => (
                                                    <p className="" key={index}>{tag.title} </p>
                                                ))}
                                            </span>
                                        </div>
                                        <p className="mt-3 font-normal text-base ">{item.description}</p>
                                        <div className="mt-3">
                                            <Link href={`/blog/blog-details/${item.slug.current}`} className="text-black dark:text-white hover:dark:text-blueColor hover:text-blueColor transition-all duration-300 ease-in py-2.5 font-bold">
                                                Read more ...
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className="lg:w-[25%] w-full">
                    <div className="p-[20px] w-full overflow-hidden rounded-md border dark:border-white/[0.2] border-dark/[0.2] sticky top-[20%]">
                        {firstPost.map((item, index) => (
                            <div className="block space-y-[30px]" key={index}>
                                <div className="className='relative flex items-center justify-center p-[30px] rounded-[5px] w-full ">
                                    {item.authors.map((author, index) => (
                                        <div className="w-full flex flex-col items-center justify-center h-full" key={index}>
                                            <div className="w-full rounded-full h-full pr-[25px]">
                                                <Image src={urlFor(author.image).url()} alt='author' width={200} height={200} className='w-[100px] h-[100px] mx-auto object-cover rounded-full' />
                                            </div>
                                            <div className="w-full h-full mt-6 mx-auto text-center">
                                                <h4 className="text-[20px] font-semibold font-lex ">{author.name}</h4>
                                                <p className="text-primaryText font-light ">{author.description}</p>
                                            </div>
                                            <div className="">
                                                <ul className="w-full h-full flex mt-2">
                                                    {author.socials?.map((social, index) => (
                                                        <li key={index} className="mr-2 w-[30px] h-[30px] flex ">
                                                            <Link href={social.url} rel="noreferrer noopener" target="_blank" className={`${social.platform === "facebook" ? "!bg-blue-800" : ""} ${social.platform === "instagram" ? "!bg-[#F56040] " : ""}  ${social.platform === "linkedin" ? "!bg-blue-400" : ""} ${social.platform === "twitter" ? "hover:bg-blue-600" : "bg-blue-600"}  ${social.platform === "youtube" ? "!bg-[#c4302b]" : ""} ${social.platform === "twitch" ? "!bg-[#6441A4]" : ""} bg-yellowColor  text-white cursor-pointer w-full h-full flex items-center justify-center z-[1] rounded-full`}>
                                                                {social.platform === "facebook" && <FaFacebookF className="" />}
                                                                {social.platform === "instagram" && <FaInstagram />}
                                                                {social.platform === "linkedin" && <FaLinkedinIn />}
                                                                {social.platform === "twitter" && <FaTwitter />}
                                                                {social.platform === "twitch" && <FaTwitch />}
                                                                {social.platform === "youtube" && <FaYoutube />}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                {/* Related posts */}
                                <div
                                    className='relative block p-[30px] group rounded-[5px] w-full '
                                >
                                    <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b dark:border-white/[0.2] border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                        <span className='mr-[10px] text-ligthText dark:text-white'>Categories</span>
                                    </div>
                                    <ul className="w-full">
                                        {item.categories.map((item, index) => (
                                            <li className="text-primaryText font-semibold p-1 break-words w-full" key={index}>
                                                <div className="content-[] inline-block align-middle w-[6px] h-[6px] border-t border-t-orangeDefault border-l border-l-orangeDefault transform rotate-[135deg] mr-[12.5px] transition-all duration-500 relative" />
                                                <span className='font-[400] mr-[3px] dark:text-textDark text-[#222222] transition-all duration-300 text-[15px] '>{item.title}</span>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                                <div
                                    className='relative block p-[30px] group rounded-[5px] w-full '
                                >
                                    <div className="text-[1.231rem] font-semibold mt-[-30px] mx-[-30px] mb-[30px] border-b dark:border-white/[0.2] border-b-[#eaeaea] px-[30px] py-[30px] pb-[25px] relative flex flex-wrap justify-between items-center">
                                        <span className='mr-[10px]  text-ligthText dark:text-white'>Tags</span>
                                    </div>
                                    <div className="w-full">
                                        {item.tags.map((item, index) => (
                                            <span className='bg-[#eaeaea] inline-block text-primaryText py-[5px] px-[11px] text-[0.7rem] font-[500] mt-0 mx-[3px] mb-[7px]' key={index}>
                                                {item.title}
                                            </span>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog