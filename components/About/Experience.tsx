import React from 'react'
import Link from "next/link"
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"

type Props = {
    experience: MyStory[]
}
const Experience = ({ experience }: Props) => {

    return (
        <section className='w-full h-full pt-8 '>
            {experience.map((item, index) => (
                <div className='w-full ' key={index}>
                    <div className="w-full mb-[40px] px-0 pt-[50px] text-center flex flex-col items-center  relative">
                        <h1 className='text-[26px] leading-[35px] capitalize font-medium dark:text-white text-ligthText w-full'>{item.title}</h1>
                        <p className='max-w-[650px] w-full leading-[20px] font-light pt-[10px] mt-6 pb-[20px] text-base relative'>
                            {item.description}</p>
                    </div>
                    <div className="mt-[60px] relative border-l border-l-black/[0.2] dark:border-l-white/[0.2] pl-[40px] w-full">
                        <div className="w-full relative mb-[50px] ">
                            {item.stories.map((story, index) => (
                                <div className="w-full flex lg:justify-between flex-wrap" key={index}>
                                    <div className="lg:w-[39.666%] w-full lg:pr-[15px]">
                                        <div className="dark:bg-black bg-white border dark:border-white/[0.2] py-[30px] px-[30px]  rounded-lg relative flex items-center">
                                            <div className='absolute left-[-46px] w-[10px] h-[10px]  rounded-full flex items-center justify-center z-10'> + </div>
                                            <div className='content-[] absolute left-[-56px] w-[30px] h-[30px] rounded-full bg-white border-[6px]  border-solid border-blueColor' />
                                            <div className=" w-[56px] h-[46px] rounded-sm  bg-blueColor flex items-center justify-center text-white webkitShadow p-2 text-2xl"><FaGraduationCap /></div>
                                            <div className="pl-4 w-full ">
                                                <h1 className="font-semibold text-lg dark:text-white text-black  ">{story.title}</h1>
                                                <span className="text-[#999] text-sm uppercase mt-[20px]"> {story.date}</span>
                                            </div>
                                        </div>
                                        <div className="mt-[50px] relative w-full  ml-[-10px]">
                                            <span className="absolute left-0 opacity-10 font-extrabold trasform rotate-[-90deg] text-dark/30  dark:text-[#666] uppercase text-[64px]">01.</span>
                                        </div>
                                    </div>
                                    <div className="lg:w-[58.333%] w-full lg:pr-[15px] lg:mt-0 mt-[100px]">
                                        <div className="dark:bg-black bg-white border dark:border-white/[0.1] border-black/[0.1] pt-[35px] px-[30px] rounded-lg border-solid pb-[45px] relative">
                                            <div className="bg-blueColor content-[] left-[-20px] top-[40px] w-[6px] h-[6px] rounded-full absolute" />

                                            <div className="w-full ">
                                                <h1 className="uppercase text-base font-semibold dark:text-white text-black pb-5">{story.subtitle}</h1>
                                                <p className="font-light pb-5 max-w-[550px] w-full dark:text-primaryText text-base text-dark/70">{story.description}</p>

                                                <ul className="w-full pt-[12px] pr-0 pb-[10px] pl-[13px] border border-solid border-black/[0.1] dark:border-white/[0.1]">
                                                    {story.points.map((point, index) => (
                                                        <li className="w-full pt-[5px] pr-0 pb-[5px] pl-[20px]  text-[#999] flex items-center text-sm relative" key={index}>
                                                            <span className="content-[] left-0 absolute w-[6px] mt-[-3px] h-[6px] rounded-full bg-blueColor" />
                                                            <p>{point.title}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="mt-[30px]">
                                                    <Link href="" className="bg-blueColor mt-[20px] py-[8px] px-[26px] text-white">View Details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-[30px]">
                        <Link href="/credential" className="text-white bg-blueColor py-[13px] text-sm px-[16px] uppercase  font-bold">Learn more</Link>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Experience