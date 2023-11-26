import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import bg1 from "../../public/images/bg1.png"
import signImg from "../../public/images/sign.png"
import arrow from "../../public/images/icons/icon.svg"
import myworks from "../../public/images/my-works.png"
import me from "../../public/images/me.png"
import TransitionEffect from "../TransitionEffect"
import { ArrowIcon } from '../Icon'
const Home = () => {
    return (
        <>
            <TransitionEffect />
            <div className='w-full h-full z-10'>
                <div className="w-full flex flex-wrap items-center">
                    <div className="w-full lg:w-1/2 lg:pr-2 pr-0 flex-grow-0 flex-shrink-0 basis-auto md:mb-0 min-h-96 mb-7">
                        <div className="w-full h-full relative flex items-start py-9 md:px-8 px-4 lg:px-11 flex-wrap rounded-3xl z-10 bg-white dark:bg-black group">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-10 z-10' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-50' />
                            <Image src={bg1} width={800} height={800} alt='bg-image' priority className='absolute left-0 top-0 w-full h-full rounded-3xl opacity-10 z-10 object-cover' />
                            <Link href={"/about"} className='absolute left-0 top-0 w-full h-full z-10' />
                            <div className="lg:w-1/2 w-full h-60  rounded-tl-3xl rounded-br-3xl text-center flex-grow-0 flex-shrink-0 basis-auto bg-shadowImageDark overflow-hidden relative">
                                <Image src={me} alt='me' sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 30vw, " priority className='object-cover w-full h-full' />
                            </div>
                            <div className="flex-grow-0 flex-shrink-0 basis-auto md:w-1/2 w-full pt-7 order-1  lg:pl-8">
                                <h4 className='text-primaryText opacity-70 text-sm tracking-wider mb-0.5'>A WEB DESIGNER</h4>
                                <h1 className='text-4xl leading-10 text-ligthText dark:text-white font-medium my-3'>Lewis
                                    Meta.</h1>
                                <p>I am a Web Designer, UI/UX Designer <br /> based in kenya.</p>
                                <Link href={"/about"} className='block absolute right-7 bottom-7 transition-all duration-300 ease-in opacity-20 text-yellow-500 hover:opacity-100 group-hover:opacity-100 z-10'>
                                    <Image src={arrow} alt='arrow-svg' width={40} height={40}
                                        priority
                                    />
                                    {/* <ArrowIcon className="" fill={""} stroke={"stroke-yellow-500"} /> */}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-2 pl-0 flex-grow-0 flex-shrink-0 basis-auto lg:mt-0 md:mt-6 mt-0 min-h-96">
                        <div className="w-full h-full relative flex flex-col items-start  ">
                            <div className="py-4 mb-6 relative w-full bg-white dark:bg-black rounded-3xl dark:rounded-none">
                                <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25' />
                                <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-30' />
                                <div className="relative w-full h-5 overflow-x-hidden ">
                                    <div className="absolute whitespace-nowrap will-change-transform text-xs slideanime transition-all duration-300 ease-in rounded-3xl ">
                                        <span>LATEST WORK AND <b className='dark:text-white text-ligthText font-normal uppercase'>FEATURED</b></span>
                                        <span className='pl-2'>LATEST WORK AND <b className='dark:text-white text-black font-normal uppercase'>new features</b></span>
                                        <span className='pl-2'>LATEST WORK AND <b className='dark:text-white text-ligthText font-normal uppercase'>new features</b></span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full relative flex flex-wrap">
                                <div className="md:w-1/2 md:pr-3 pr-0 w-full md:mb-0 mb-6 ">
                                    <div className="relative rounded-3xl h-full p-6 flex flex-col bg-white dark:bg-black justify-center items-center">
                                        <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-10 z-10 dark:block hidden' />
                                        <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-30 dark:block hidden' />
                                        <Image src={bg1} sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 30vw, " fill alt='bg-image' priority className='absolute left-0 top-0 w-full h-full rounded-3xl opacity-10 z-10 object-cover dark:block hidden' />
                                        <Link href={"/credential"} className='absolute left-0 top-0 w-full h-full z-10' />
                                        <Image src={signImg} alt='bg-image' sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 30vw, " className='object-cover' priority />
                                        <div className="relative flex-wrap w-full justify-between items-center flex mt-7">
                                            <div className="relative">
                                                <h4 className='text-primaryText text-xs opacity-70 -tracking-tighter mb-3 uppercase font-semibold'>MORE ABOUT ME</h4>
                                                <h1 className='text-lg text-ligthText dark:text-white font-medium leading-none'>Credentials</h1>
                                            </div>
                                            <Link href={"/credentials"} className="z-10">
                                                <Image src={arrow} alt='arrow-svg' width={40} height={40}
                                                    priority
                                                    sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 30vw, "
                                                    className='opacity-25 hover:opacity-100 transition-all duration-300 ease-in' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-1/2 md:pl-3 pl-0 w-full ">
                                    <div className="relative rounded-3xl h-full p-6 bg-white dark:bg-black flex flex-col items-center justify-center">
                                        <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-10 z-10' />
                                        <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-30' />
                                        <Image src={bg1} priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," alt='bg-image' className='absolute left-0 top-0 w-full h-full rounded-3xl opacity-10 z-10 object-cover' />
                                        <Link href={"/works"} className='absolute left-0 top-0 w-full h-full z-10' />
                                        <Image src={myworks} alt='bg-image' width={300} height={300} priority className='object-cover ' />
                                        <div className="relative flex-wrap w-full justify-between items-center flex mt-0">
                                            <div className="relative">
                                                <h4 className='text-primaryText text-xs opacity-70 -tracking-tighter mb-3 uppercase font-semibold'>showcase</h4>
                                                <h1 className='text-lg text-ligthText dark:text-white font-medium leading-none capital'>Projects</h1>
                                            </div>
                                            <Link href={"/works"} className="z-10">
                                                <Image src={arrow} alt='arrow-svg' width={40} height={40}
                                                    priority
                                                    className='opacity-25 hover:opacity-100 transition-all duration-300 ease-in' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home