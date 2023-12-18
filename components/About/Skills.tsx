"use client"

import React, { useState, useEffect } from 'react'

type Props = {
  skills: Skills[]
}

function convertPercentagetoDegree({ skills }: Props) {
  skills.map((item) => item.skillPercentage * 3.6)
}

const Skills = ({ skills }: Props) => {

  return (
    <div className="w-full relative mt-[50px]">
      <div className="mb-[40px]">
        <h1 className="font-bold text-[35px] mb-12 w-full text-start dark:text-white text-black">My Skills & <span className="text-blueColor">Abilities</span></h1>
      </div>

      <div className="flex flex-wrap w-full justify-start">
        {skills.map((skill, index) => (
          <div className="w-1/2 md:w-[33.33%] flex items-start justify-start flex-col " key={index}>
            <div className="block py-[20px]">
              <div className="bg-[#252525] relative w-[1em] h-[1em] rounded-full text-center my-5 flex items-center justify-center text-[120px]">
                <span className="absolute left-0 top-0 w-[5em] leading-[5em] text-[0.2em] block text-center transition-all duration-200 ease-out text-white z-10">{skill.skillPercentage}</span>

                <div className="absolute w-[1em] h-[1em] clipAuto">
                  <div className={`border-solid border-[0.08em] border-blueColor transform rounded-full absolute w-[120px] h-[120px] clipPath`} />
                  <div className="absolute clipPath w-[120px] h-[120px] rounded-full transform  border-solid border-[0.08em] border-blueColor"  style={{rotate: `${skill.skillPercentage*-1.8}deg` }} />
                </div>
                <div className='absolute top-[0.08em] left-[0.08em] block content-[] rounded-full w-[0.84em] h-[0.84em] transition-all duration-200 ease-in  bg-[#111]' />
              </div>

              <h1 className="text-sm uppercase font-semibold text-center">{skill.title}</h1>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Skills