import React from 'react'
import Image from "next/image"

import bg1 from "../../public/images/bg1.png"
import stars from "../../public/images/star.png"
import me from "../../public/images/me.png"

const About = () => {
  return (
    <>
      <section className='w-full h-full  pt-16'>
        <div className="w-full h-full flex flex-wrap items-center justify-start">
          <div className="w-full lg:w-[370px] lg:pr-4 pl-0 flex-wrap flex-grow-0 flex-shrink-0 h-full mb-8 lg:mb-0">
            <div className="w-full h-full flex items-center lg:justify-start justify-center">
              <div className="w-full h-full bg-white p-6 rounded-3xl max-w-full dark:bg-black relative ">
                <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10' />
                <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-50 overflow-hidden' />
                <Image src={bg1} width={800} height={800} alt='bg-image' priority className='absolute left-0 top-0 w-full h-full rounded-3xl opacity-10 z-10 object-cover' />
                <Image src={me} alt='me' sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 30vw, " priority className='bg-shadowImageDark object-cover w-full h-full rounded-tl-3xl rounded-br-3xl ' />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[calc(100%-370px)] flex-wrap lg:pl-4 pl-0 flex-grow-0 flex-shrink-0 h-full">
            <div className="w-auto justify-center lg:justify-start flex gap-5 items-center">
              <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," />
              <h1 className="text-[26px] leading-[36px] md:text-[45px] text-dark dark:text-white md:leading-[55px] sm:text-[30px] sm:leading-[40px] lg:text-[70px] lg:leading-[75px] uppercase font-semibold">Self - summery</h1>
              <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," className='overflow-hidden' />
            </div>
            <div className="mt-7 relative pt-[115px] pr-[60px] pb-[30px] pl-[30px] rounded-3xl bg-white dark:bg-black w-auto">
              <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10' />
              <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-50 overflow-hidden' />
              <h1 className='dark:text-white text-ligthText text-[36px] font-medium capitalize'>lewis  meta</h1>
              <p className='text-primaryText dark:text-white leading-6 opacity-80 text-base pt-4'>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About