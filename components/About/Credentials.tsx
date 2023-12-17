
import Image from "next/image"
import Link from "next/link"

import me from "../../public/images/lew.jpg"
import { GithubIcon, InstagramIcon, TwitterIcon2 } from "../Icon"
import Skills from "./Skills"
import Experiences from "./Experiences"
import Education from "./Education"

const Credentials = () => {
    return (
        <section className="w-full pt-20">
            <div className="w-full flex flex-wrap relative">
                <div className="flex-grow-0 flex-shrink-0 basis-auto md:w-[380px] mx-auto w-full mb-[40px] lg:mb-0">
                    <div className="w-full sticky flex-none top-[18%]">
                        <div className="pt-6 pr-6 pb-9 pl-6 dark:bg-black relative bg-white rounded-3xl w-full text-center flex flex-col">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10 -m-0.5' />
                            <div className="rounded-3xl mb-10 bg-shadowImageDark overflow-hidden relative">
                                <Image src={me} alt='me' sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 30vw, " priority className='object-cover w-full h-[350px] rounded-3xl' />
                            </div>
                            <h1 className="text-ligthText dark:text-white font-medium text-[26px] mb-3">Lewis Meta</h1>
                            <p className="dark:dark:text-textDark text-ligthText/70  dark:opacity-60 text-sm mb-6">@lewmeta</p>
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
                <div className="flex-grow-0 flex-shrink-0 w-full basis-auto lg:w-[calc(100%-380px)] lg:pl-14 relative">
                    <div className="w-full relative">
                        <div className="pb-[84px]">
                            <h1 className="font-bold text-[35px] mb-12 w-full text-start dark:text-white text-black">More about <span className="text-blueColor">Lewis Meta</span></h1>
                            <p className="text-base font-light dark:text-white text-ligthText opacity-80 mb-7 ">Hi, I&apos;m Lew Meta, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients&apos; visions to life.</p>
                            <p className="text-base font-light dark:text-white text-ligthText opacity-80 mb-7 ">I believe that design is about more than just making things look pretty – it&apos;s about solving problems and creating intuitive, enjoyable experiences for users.</p>
                            <p className="text-base font-light dark:text-white text-ligthText opacity-80 mb-7 ">Whether I&apos;m working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
                        </div>
                        <div className="">
                            <Experiences />
                        </div>
                        <div className="">
                            <Education />
                        </div>
                        <div className="">
                            <Skills />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Credentials