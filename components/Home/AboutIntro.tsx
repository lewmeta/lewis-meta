import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import bg1 from "../../public/images/bg1.png"
import signImg from "../../public/images/gfonts.png"
import arrow from "../../public/images/icons/icon.svg"
import CameraIcon, { CircleIcons, InstagramIcon, MobileIcon, PencilIcon, TwitterIcon2 } from '../Icon'

const AboutIntro = () => {
    return (
        <section className='w-full h-full mt-6'>
            <div className="flex relative flex-wrap items-center">
                <div className="md:w-1/2 lg:mt-0 mb-4 md:mb-2 lg:w-1/4 pr-3 order-1 w-full">
                    <div className="w-full flex items-start flex-wrap relative h-full">
                        <div className="w-full relative p-6 rounded-3xl h-full group bg-white dark:bg-black flex flex-col items-center ">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-30' />
                            <Image src={bg1} width={800} height={800} alt='bg-image' priority className='absolute left-0 top-0 w-full h-full rounded-3xl opacity-10 z-10 object-cover' />
                            <Link href={"/blog"} className='absolute left-0 top-0 w-full h-full z-10' />
                            <Image src={signImg} alt='bg-image' width={200} height={100} className='object-cover' priority />
                            <div className="relative flex-wrap w-full justify-between items-center flex mt-7">
                                <div className="relative">
                                    <h4 className='text-primaryText text-xs opacity-70 -tracking-tighter mb-3 uppercase font-semibold'>blog</h4>
                                    <h1 className='text-lg dark:text-white text-ligthText font-medium leading-none'>Gfonts</h1>
                                </div>
                                <Link href={"/blog"} className="z-10">
                                    <Image src={arrow} alt='arrow-svg' width={40} height={40}
                                        priority
                                        className='opacity-25 group-hover:opacity-100 transition-all duration-300 ease-in' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:mt-0 mt-2 w-full lg:order-2 order-3 pr-0">
                    <div className="w-full flex items-start flex-wrap relative h-full">
                        <div className="relative p-6 rounded-3xl h-full group w-full dark:bg-black bg-white">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25' />
                            <div className='absolute left-0 top-0 bottom-0 right-0  bg-light rounded-3xl -z-30 -m-0.5 opacity-30 dark:bg-shadowLightAfter dark:bg-black ' />
                            <Image src={bg1} width={800} height={800} alt='bg-image' priority className='absolute left-0 top-0 w-full h-full rounded-3xl opacity-10 z-10 object-cover' />
                            <Link href={"/blog"} className='absolute left-0 top-0 w-full h-full z-10' />
                            <div className="flex flex-wrap w-full items-center justify-center gap-20 mb-14 mt-11">
                                <div className=" relative flex items-center text-blue-500 dark:text-white justify-center ">
                                    <CameraIcon className={"w-11 h-11 outline-dark"} />
                                </div>
                                <div className=" relative flex items-center justify-center dark:text-white text-blue-500">
                                    <CircleIcons className={"w-11 h-11 "} />
                                </div>
                                <div className=" relative  flex items-center dark:text-white text-blue-500  justify-center ">
                                    <PencilIcon className={"w-11 h-11"} />
                                </div>
                                <div className="relative flex items-center justify-center dark:text-white text-blue-500">
                                    <MobileIcon className={"w-11 h-11 "} />
                                </div>
                            </div>
                            <div className="relative flex-wrap w-full justify-between items-center flex mt-7">
                                <div className="relative">
                                    <h4 className='dark:text-primaryText text-ligthText text-xs opacity-70 -tracking-tighter mb-3 uppercase font-semibold'>specialization</h4>
                                    <h1 className='text-lg dark:text-light text-ligthText font-medium leading-none'>Services Offering</h1>
                                </div>
                                <Link href={"/blog"} className="z-10">
                                    <Image src={arrow} alt='arrow-svg' width={40} height={40}
                                        priority
                                        className='opacity-25 group-hover:opacity-100 transition-all duration-300 ease-in ' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 w-full lg:mt-0 mb-2 lg:w-1/4 pl-0 md:pl-3 lg:order-3 order-2">
                    <div className="w-full flex items-start flex-wrap relative h-full">
                        <div className="relative p-6 rounded-3xl h-full w-full dark:bg-black bg-white ">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-30' />
                            <Image src={bg1} width={800} height={800} alt='bg-image' priority className='absolute left-0 top-0 w-full h-full rounded-3xl opacity-10 z-10 object-cover' />
                            <Link href={"/blog"} className='absolute left-0 top-0 w-full h-full z-10' />
                            <div className="flex w-full items-center justify-center gap-5 p-5 mb-4 relative dark:bg-transparent  bg-[#FBFBFC]">
                                <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-10 ' />
                                <Link href={""} target='_blank' className='w-20 z-10 h-20 flex items-center justify-center rounded-full relative shadow-main border border-white/10 text-white transition-all duration-300 ease-in'>
                                    <TwitterIcon2 className={"w-9 h-9  text-black dark:text-white transition-all duration-300 ease-in"} />
                                </Link>
                                <Link href={""} target='_blank' className='w-20 z-10 h-20 flex items-center justify-center rounded-full relative shadow-main border border-white/10 text-white transition-all duration-300 ease-in' >
                                    <InstagramIcon className={"w-9 h-9 transition-all duration-300 ease-in dark:text-white text-black"} />
                                </Link>
                            </div>
                            <div className="relative flex-wrap w-full justify-between items-center flex mt-7">
                                <div className="relative">
                                    <h4 className='dark:text-primaryText text-ligthText text-xs opacity-70 -tracking-tighter mb-3 uppercase font-semibold'>stay with me</h4>
                                    <h1 className='text-lg dark:text-light text-ligthText font-medium leading-none capitalize'>profiles</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutIntro