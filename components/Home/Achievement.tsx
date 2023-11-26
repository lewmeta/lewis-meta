"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

import bg1 from "../../public/images/bg1.png"
import arrow from "../../public/images/icons/icon.svg"
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumbers = ({ value }: any) => {
    const ref = useRef<HTMLSpanElement | null>(null);


    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: false })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest: any) => {
            if (ref.current !== null && latest.toFixed(0) <= value) {
                (ref.current as HTMLSpanElement).textContent = latest.toFixed(0);
            }
        })
    }, [value, springValue, motionValue]);
    return (
        <span ref={ref}></span>
    )
}

const Achievement = () => {
    return (
        <section className='w-full h-full mt-6'>
            <div className="flex relative flex-wrap items-center">
                <div className="lg:w-1/2 w-full lg:mb-0 mb-2 pl-0 pr-3">
                    <div className="w-full flex items-start flex-wrap relative h-full">
                        <div className="relative p-7 rounded-3xl h-full group w-full bg-white dark:bg-black">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-20' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-20' />
                            <div className="flex w-full flex-wrap items-center justify-center relative">
                                <div className="md:pr-4 pr-0 pb-4 w-full flex-grow-0 flex-shrink-0 md:w-1/2 lg:w-[33.33%] relative">
                                    <div className="relative w-full rounded-3xl text-center md:py-14 sm:py-10 sm:px-5 py-8 px-4  md:px-7 dark:bg-black bg-[#FBFBFC]">
                                        <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-50 z-10' />
                                        <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10' />
                                        <h1 className='dark:text-white text-blueColor text-4xl mb-4 leading-5 -tracking-wider'><AnimatedNumbers value={5} /></h1>
                                        <p className='text-xs dark:text-textDark text-ligthText opacity-50 uppercase m-0 font-semibold mt-2'>Years <br />in experience</p>
                                    </div>
                                </div>
                                <div className="md:pr-4 pr-0 pb-4 w-full flex-grow-0 flex-shrink-0 md:w-1/2 lg:w-[33.33%] relative">
                                    <div className="relative w-full rounded-3xl text-center md:py-14 sm:py-10 sm:px-5 py-8 px-4  dark:bg-black bg-[#FBFBFC]">
                                        <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-50' />
                                        <h1 className='dark:text-white text-blueColor text-4xl mb-4 leading-5 -tracking-wider'>+<AnimatedNumbers value={70} /></h1>
                                        <p className='text-xs dark:text-textDark text-ligthText opacity-50 uppercase m-0 font-semibold mt-2'>Clients <br />Worldwide</p>
                                    </div>
                                </div>
                                <div className="pr-0 w-full flex-grow-0 flex-shrink-0 md:w-1/2 lg:w-[33.33%] relative">
                                    <div className="relative w-full rounded-3xl text-center md:py-14 sm:py-10 sm:px-5 py-8 px-4 dark:bg-black bg-[#FBFBFC]">
                                        <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-50' />
                                        <h1 className='dark:text-white text-blueColor text-4xl mb-4 leading-5 -tracking-wider'>+<AnimatedNumbers value={50} /></h1>
                                        <p className='text-xs dark:text-textDark text-ligthText opacity-50 uppercase m-0 font-semibold mt-2'>Total <br />Projects</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:mt-0 mb-4 lg:pl-3 w-full">
                    <div className="w-full flex items-start flex-wrap relative h-full">
                        <div className="w-full relative pt-20 pb-10 rounded-3xl h-full group px-6 bg-white dark:bg-black">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-30' />
                            <Image src={bg1} width={800} height={800} alt='bg-image' priority className='absolute left-0 top-0 w-full h-full rounded-3xl opacity-10 z-10 object-cover' />
                            <Link href={"/contact"} className='absolute left-0 top-0 w-full h-full z-10' />
                            <h1 className='lg:text-5xl md:text-3xl text-2xl font-medium dark:text-white  text-black m-0 '>Let&apos;s <br />work <span className='text-blueColor'>together.</span></h1>
                            <Link href={"/contact"} className="z-10 absolute block bottom-9 right-7">
                                <Image src={arrow} alt='arrow-svg' width={40} height={40}
                                    priority
                                    className='opacity-25 group-hover:opacity-100 transition-all duration-300 ease-in' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievement