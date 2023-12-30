"use client"

import React, { useRef } from 'react'
import {motion, useScroll } from "framer-motion";
import LiIcon from './LiIcon';

type Props = {
    education: Educations[];
}

const Details = ({type, time, place, info}:any) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8  first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
            <LiIcon reference={ref}/>
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration: 1, type:"spring"}}
            >
                <h3 className="capitalize font-bold text-lg text-ligthText dark:text-white">{type}</h3>
                <span className="capitalize font-medium text-dark/75 dark:text-white/75">{time} | {place}</span>
                <p className="font-medium w-full dark:text-textDark text-primaryText mt-3">{info}</p>
            </motion.div>
        </li>
    )
}

const Education = ({education}:Props) => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="py-[30px] mt-[80px]">
        <h1 className="font-bold text-[35px] mb-12 w-full text-start dark:text-white text-black">Education</h1>
        <div ref={ref} className="w-full mx-auto relative">
            <motion.div 
            style={{scaleY: scrollYProgress}}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-blueColor origin-top"/>
            <ul className="w-full flex flex-col items-start justify-between ml-4">
                {education.map((item, index) => (
                    <Details
                    type={item.course} 
                    time={item.date}
                    place={item.institution}
                    info={item.description}
                    key={index}
                    />
                ))}
                {/* <Details
                type={"Bachelor Of Science In Computer Science"} company={"Google"}
                time={"2016-2020"}
                place={"Massachusetts Institute Of Technology (MIT)"}
                info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering Artificial Intelligence."}
                />
                <Details
                type={"Bachelor Of Science In Computer Science"} company={"Google"}
                time={"2016-2020"}
                place={"Massachusetts Institute Of Technology (MIT)"}
                info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering Artificial Intelligence."}
                />
                <Details
                type={"Bachelor Of Science In Computer Science"} company={"Google"}
                time={"2016-2020"}
                place={"Massachusetts Institute Of Technology (MIT)"}
                info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering Artificial Intelligence."}
                /> */}
            </ul>
        </div>
    </div>
  )
}

export default Education