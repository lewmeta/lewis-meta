import Link from "next/link"
import Image from "next/image"
import stars from "../../public/images/star.png"
import project_1 from "@/public/images/project/project1.jpeg"

const BlogDetails = () => {
    return (
        <section className="w-full">
            <div className="w-full dark:text-textDark dark:opacity-70 text-ligthText/90 mb-6 flex items-center">
                <Link href={"/"} className="uppercase opacity-100">Home</Link>
                <p className="pl-3">- My published articles</p>
            </div>
            <h1 className="lg:text-[56px] lg:leading-[70px] md:text-[46px] md:leading-[60px] sm:text-[35px] sm:leading-[45px] text-[28px] leading-[35px] relative mb-7 font-semibold gap-6 dark:text-white text-ligthText flex items-center lg:w-[85%] w-full">
                {/* <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," /> */}
                Unsatiable entreaties may collecting Power.
                {/* <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," className="flex justify-start" /> */}
            </h1>
            <div className="flex flex-wrap w-full md:pt-[60px] pt-[30px] lg:pt-[130px]">
                <div className="lg:w-[66.6667%] w-full lg:pr-[85px] mb-10 lg:mb-0">
                    <div className="w-full h-[400px] mb-[70px] overflow-hidden relative">
                        <Link href={"/blog/blog-details/1"} className="absolute top-0 left-0 w-full h-full" />
                        <Image src={project_1} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full block text-blueColor text-base font-normal leading-[16.8px] mb-8">
                        June 9, 2023 -
                        <span className=""> Uncategorized</span>
                    </div>
                    <p className="text-base leading-6 dark:text-white text-ligthText dark:opacity-80 opacity-40 mb-7 font-light">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                    <p className="text-base leading-6 dark:text-white text-ligthText dark:opacity-80 opacity-40 mb-7 font-light">Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Giy direction neglected but supported yet her.</p>
                    <p className="text-base leading-6 dark:text-white text-ligthText  dark:opacity-80 opacity-40 mb-7 font-light">Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Giy direction neglected but supported yet her.</p>
                    <ul className="mb-7">
                        <li className="dark:text-textDark text-ligthText/70 text-base mb-6 leading-6">- Pretty merits waited six</li>
                        <li className="dark:text-textDark text-ligthText/70 text-base mb-6 leading-6">– General few civilly amiable pleased account carried.</li>
                        <li className="dark:text-textDark text-ligthText/70 text-base mb-6 leading-6">– Continue indulged speaking</li>
                        <li className="dark:text-textDark text-ligthText/70 text-base mb-6 leading-6">– Narrow formal length my highly</li>
                        <li className="dark:text-textDark text-ligthText/70 text-base mb-6 leading-6">– Occasional pianoforte alteration unaffected impossible</li>
                    </ul>
                    <p className="text-base leading-6 dark:text-white text-ligthText opacity-80 mb-7 font-light">Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited.</p>
                    <div className="flex flex-wrap gap-3">
                        <span className="py-3 px-5 font-normal rounded-2xl text-xs mr-1.5 mt-3 capitalize bg-dark text-white">Development</span>
                        <span className="py-3 px-5 font-normal rounded-2xl text-xs mr-1.5 mt-3 capitalize bg-dark text-white ">Planning</span>
                    </div>
                    <div className="mt-[70px] py-9 lg:px-11 md:px-8 px-5 flex-wrap rounded-3xl bg-white dark:bg-black relative w-full">
                        <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-10 z-10' />
                        <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-50' />
                        <h1 className="text-2xl leading-8 dark:text-white text-ligthText mb-10" >0 Comment</h1>
                        <span className="comments"></span>
                        <div className="relative w-full">
                            <h1 className="text-2xl leading-8 dark:text-white text-ligthText mb-10">Leave a reply</h1>
                            <form action="" className="relative z-30">
                                <div className="relative mb-4">
                                    <textarea className="w-full border-none outline-none dark:bg-white/10 bg-dark/10 resize-none h-[145px] rounded-lg py-4 px-5 block dark:text-white text-ligthText/60" name="comment" required placeholder="Leave your message"></textarea>
                                </div>
                                <div className="mb-4 w-full">
                                    <input type="text" placeholder="Name *" required name="name" className="w-full border-none outline-none dark:bg-white/10 bg-dark/10 resize-none rounded-lg py-4 px-5 block dark:text-white text-ligthText/60" />
                                </div>
                                <div className="mb-4 w-full">
                                    <input type="email" placeholder="Email *" aria-required="true" required name="email" className="w-full border-none outline-none dark:bg-white/10 bg-dark/10 resize-none rounded-lg py-4 px-5 block dark:text-white text-ligthText/60" />
                                </div>
                                <div className="w-full">
                                    <button className="w-full text-center py-4 border-none px-8 transition-all duration-300 rounded-2xl font-medium dark:bg-dark bg-dark text-white text-base capitalize">send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="lg:w-[33.3333%] w-full">
                    <div className="w-full relative">
                        <div className="mb-10 relative w-full dark:bg-black rounded-3xl pt-[46px] pr-[30px] pb-[62px] pl-[30px] bg-white">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30' />
                            <form action="" className="relative z-30 w-full" role="search" >
                                <label htmlFor="search" className="mb-2.5 block -mt-0.5 z-20 ">Search</label>
                                <div className="relative border border-solid border-[#e7e7e7] rounded-md flex max-w-full flex-nowrap bg-white">
                                    <input type="text" className="border-none bg-white p-3.5 min-h-[60px] w-full outline-none" placeholder="" required />
                                    <button className="absolute right-1.5 w-auto top-1.5 text-sm z-30 rounded-md  capitalize transition-all duration-300 ease-in bg-blueColor text-white px-5 min-h-[50px] tracking-widest">Search</button>
                                </div>
                            </form>
                        </div>
                        <div className="mb-10 relative w-full dark:bg-black rounded-3xl pt-[46px] pr-[30px] pb-[62px] pl-[30px] bg-white">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30' />
                            <h1 className="dark:text-textDark font-medium dark:opacity-50 text-lg uppercase mb-7 text-ligthText/70">Recent Posts</h1>
                            <ul className="list-none relative z-20">
                                <li className="border-b  border-solid border-[#dbdfe4] mb-3.5 pb-3.5 text-sm leading-6">
                                    <Link className="block leading-6 text-base dark:text-white text-ligthText opacity-80" href="/blog/blog-details/1">Discovery incommode earnestly he commanded</Link>
                                </li>
                                <li className="border-b  border-solid border-[#dbdfe4] mb-3.5 pb-3.5 text-sm leading-6">
                                    <Link className="block leading-6 text-base dark:text-white text-ligthText opacity-80" href="/blog/blog-details/1">Unsatiable entreaties may collecting Power</Link>
                                </li>
                                <li className="mb-3.5 pb-3.5 text-sm leading-6">
                                    <Link className="block leading-6 text-base dark:text-white text-ligthText opacity-80" href="/blog/blog-details/1">Consulted admitting is power acuteness.</Link>
                                </li>
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
                            <h1 className="font-medium dark:text-white/80 text-ligthText text-base">Uncatogorized</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogDetails