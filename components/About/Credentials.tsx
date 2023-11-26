
import Image from "next/image"
import Link from "next/link"

import me from "../../public/images/me.png"
import { DribbbleIcon, GithubIcon, InstagramIcon, TwitterIcon2 } from "../Icon"

const Credentials = () => {
    return (
        <section className="w-full pt-20">
            <div className="w-full flex flex-wrap relative">
                <div className="flex-grow-0 flex-shrink-0 basis-auto md:w-[380px] w-full mb-[40px] md:mb-0 ">
                    <div className="w-full sticky flex-none top-[15%]">
                        <div className="pt-6 pr-6 pb-9 pl-6 dark:bg-black relative bg-white rounded-3xl w-full text-center flex flex-col">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10 -m-0.5' />
                            <div className="rounded-3xl mb-10 bg-shadowImageDark overflow-hidden relative">
                                <Image src={me} alt='me' sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 30vw, " priority className='object-cover w-full h-full rounded-3xl' />
                            </div>
                            <h1 className="text-ligthText dark:text-white font-medium text-[26px] mb-3">David Henderson</h1>
                            <p className="dark:dark:text-textDark text-ligthText/70  dark:opacity-60 text-sm mb-6">@davidhenderson</p>
                            <ul className="gap-4 flex mb-[36px] relative z-20 justify-center ">
                                <li>
                                    <Link href={""} target="_blank" className="w-[50px] h-[50px] rounded-full block leading-[55px] dark:text-white text-black  text-[20px] border border-solid border-dark/10  dark:border-white/10 transition-all duration-300 ease-in p-2">
                                        <InstagramIcon className={" "} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""} target="_blank" className="w-[50px] h-[50px] rounded-full block leading-[55px] dark:text-white text-black  text-[20px] border border-solid border-dark/10  dark:border-white/10 transition-all duration-300 ease-in p-2">
                                        <GithubIcon className={" "} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href={""} target="_blank" className="w-[50px] h-[50px] rounded-full block leading-[55px] dark:text-white text-black  text-[20px] border border-solid border-dark/10  dark:border-white/10 transition-all duration-300 ease-in p-2">
                                        <TwitterIcon2 className={" "} />
                                    </Link>
                                </li>
                            </ul>
                            <Link href={"/contact"} className="w-full z-20 relative dark:bg-dark bg-light dark:text-white text-ligthText transition-all duration-300 rounded-2xl text-sm font-medium py-3 px-8 text-center capitalize">contact me</Link>
                        </div>
                    </div>
                </div>
                <div className="flex-grow-0 flex-shrink-0 w-full basis-auto md:w-[calc(100%-380px)] md:pl-14">
                    <div className="w-full relative">
                        <div className="pb-[110px]">
                            <h2 className="mb-[37px] text-ligthText dark:text-white text-lg uppercase">About Me</h2>
                            <p className="text-base dark:text-white text-ligthText opacity-80 mb-7 ">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                            <p className="text-base dark:text-white text-ligthText opacity-80 mb-7 ">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                        </div>
                        <div className="mb-[85px]">
                            <h1 className="mb-[22px] text-ligthText dark:text-white text-lg uppercase">Experience</h1>
                            <div className="">
                                <h1 className="dark:dark:text-textDark text-ligthText/70  dark:opacity-60 text-sm mb-0">2007 - 2017</h1>
                                <h2 className="text-lg text-blueColor">Framer Designer &amp; Developer</h2>
                                <h3 className="text-ligthText/50 dark:text-textDark/70 text-sm mb-0">Bluebase Designs</h3>
                                <p className="text-base dark:text-white text-primaryText dark:opacity-80 leading-6 mt-3">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                            </div>
                            <div className="mt-[58px]">
                                <h1 className="dark:dark:text-textDark text-ligthText/70  dark:opacity-60 text-sm mb-0">2007 - 2017</h1>
                                <h2 className="text-lg text-blueColor">Framer Designer &amp; Developer</h2>
                                <h3 className="text-ligthText/50 dark:text-textDark/70 text-sm mb-0">Bluebase Designs</h3>
                                <p className="text-base dark:text-white text-primaryText dark:opacity-80 leading-6 mt-3">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                            </div>
                        </div>
                        <div className="mb-[85px]">
                            <h1 className="mb-[22px] text-ligthText dark:text-white text-lg uppercase">Education</h1>
                            <div className="">
                                <h1 className="dark:dark:text-textDark text-ligthText/70  dark:opacity-60 text-sm mb-0">2007 - 2017</h1>
                                <h2 className="text-lg text-blueColor">Framer Designer &amp; Developer</h2>
                                <h3 className="text-ligthText/50 dark:text-textDark/70 text-sm mb-0">Bluebase Designs</h3>
                                <p className="text-base dark:text-white text-primaryText dark:opacity-80 leading-6 mt-3">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                            </div>
                            <div className="mt-[58px]">
                                <h1 className="dark:dark:text-textDark text-ligthText/70  dark:opacity-60 text-sm mb-0">2007 - 2017</h1>
                                <h2 className="text-lg text-blueColor">Framer Designer &amp; Developer</h2>
                                <h3 className="text-ligthText/50 dark:text-textDark/70 text-sm mb-0">Bluebase Designs</h3>
                                <p className="text-base dark:text-white text-primaryText dark:opacity-80 leading-6 mt-3">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                            </div>
                        </div>
                        <div className="mb-[85px]">
                            <h1 className="mb-[22px] text-ligthText dark:text-white text-lg uppercase">Skills</h1>
                            <div className="flex flex-wrap">
                                <div className="md:w-1/2 w-full flex-grow-0 flex-shrink-0 basis-auto">
                                    <span className="dark:text-textDark text-ligthText ont-medium mb-2.5">85%</span>
                                    <h3 className="dark:text-white text-primaryText opacity-90 text-lg mb-1">JavaScript</h3>
                                    <p className="dark:text-textDark text-ligthText ont-medium mb-2.5">Non enim praesent</p>
                                </div>
                                <div className="md:w-1/2 w-full flex-grow-0 flex-shrink-0 basis-auto">
                                    <span className="dark:text-textDark text-ligthText ont-medium mb-2.5">85%</span>
                                    <h3 className="dark:text-white text-primaryText opacity-90 text-lg mb-1">Python</h3>
                                    <p className="dark:text-textDark text-ligthText ont-medium mb-2.5">Non enim praesent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Credentials