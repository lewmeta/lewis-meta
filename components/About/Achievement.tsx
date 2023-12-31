"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { FaBusinessTime, FaClock, FaMapMarked, FaPhoneAlt, FaUser, FaUsers } from 'react-icons/fa'
import { BiBriefcaseAlt, BiEnvelope } from 'react-icons/bi'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

type Props = {
    achievements:Achievements[];
}
const AnimatedNumbers = ({ value }: any) => {
    const ref = useRef<HTMLSpanElement | null>(null);


    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 9000 })
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

const Achievement = ({achievements}:Props) => {
    return (
        <section className="w-full pt-8">
            <div className="w-full relative flex flex-wrap md:gap-0 gap-5">
                <div className="lg:w-[33.33%] md:w-1/2 lg:pl-0 md:p-[15px] w-full">
                    <div className="w-full mx-0 relative dark:shadow-new border dark:border-white/[0.09] border-black/[0.09] dark:bg-black bg-lightBlue pt-[30px] px-[25px] pb-[30px] rounded-lg flex items-center justify-center">
                        <div className="w-[50px] h-[50px] rounded-lg text-base font-semibold transition-all duration-200 ease-in-out bg-blueColor text-white flex items-center justify-center">
                            <FaUsers className="text-2xl" />
                        </div>
                        <div className="block ml-8">
                            <h1 className='text-blueColor font-medium text-[34px] leading-[40px]'><AnimatedNumbers value={achievements[0].value} /> +</h1>
                            <span className='text-black dark:text-white text-xs font-semibold uppercase'>{achievements[0].title}</span>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[33.33%] md:p-[15px] md:w-1/2 w-full">
                    <div className="w-full mx-0 relative dark:shadow-new border dark:border-white/[0.09] border-black/[0.09] dark:bg-blueColor bg-blueColor pt-[30px] px-[25px] pb-[30px] transition-all duration-300 ease-in-out rounded-lg flex justify-center items-center ">
                        <div className="w-[50px] h-[50px] rounded-lg text-base font-semibold transition-all duration-200 ease-in-out bg-white text-blueColor flex items-center justify-center">
                            <FaBusinessTime className="text-2xl" />
                        </div>
                        <div className="block ml-8">
                            <h1 className='text-white font-medium text-[34px] leading-[40px]'><AnimatedNumbers value={achievements[1].value} /> +</h1>
                            <Link href={"tel:0748567120"} target='_blank' className='text-white dark:text-white text-xs font-semibold uppercase'>{achievements[1].title}</Link>
                        </div>
                    </div>
                </div>
                <div className="lg:w-[33.33%] md:p-[15px] lg:pr-0 md:w-1/2 w-full">
                    <div className="w-full mx-0 relative dark:shadow-new border dark:border-white/[0.09] border-black/[0.09] dark:bg-black bg-lightBlue pt-[30px] px-[25px] pb-[30px] transition-all duration-300 ease-in-out rounded-lg flex items-center justify-center">
                        <div className="w-[50px] h-[50px] rounded-lg text-base font-semibold transition-all duration-200 ease-in-out bg-blueColor text-white flex items-center justify-center">
                            <FaClock className="text-2xl" />
                        </div>
                        <div className="block ml-8">
                            <h1 className='text-blueColor font-medium text-[34px] leading-[40px]'><AnimatedNumbers value={achievements[2].value} /> +</h1>
                            <span className='text-black dark:text-white text-xs font-semibold uppercase'>{achievements[2].title}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievement