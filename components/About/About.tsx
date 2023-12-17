"use client"
import React from 'react'
import Image from "next/image"
import stars from "../../public/images/star.png"
import me from "../../public/images/lew.jpg"
import Link from 'next/link'
import urlFor from '@/lib/urlFor'

type Props = {
  aboutintro: AboutIntro[];
}
const About = ({ aboutintro }: Props) => {
  return (
    <>
      <section className='w-full h-full  pt-16'>
        {aboutintro.map((item, index) => (
          <div className="w-full h-full flex flex-wrap items-center justify-start" key={index}>
            <div className="w-full lg:w-[370px] lg:pr-4 pl-0 flex-wrap flex-grow-0 flex-shrink-0 h-full mb-8 lg:mb-0">
              <div className="w-full h-full flex items-center lg:justify-start justify-center">
                <div className="w-full bg-white p-6 rounded-lg max-w-full dark:bg-black relative h-[560px] lg:h-[420px] ">
                  <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-lg opacity-10 z-10' />
                  <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-lg -z-30 -m-0.5 opacity-50 overflow-hidden' />
                  <Image src={urlFor(item.image).url()} alt='me' sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 30vw, " priority width={800} height={800} className='bg-shadowImageDark object-cover w-full h-full rounded-lg grayscale  transform grayscale-100' />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[calc(100%-370px)] flex-wrap lg:pl-4 pl-0 flex-grow-0 flex-shrink-0 h-full">
              <div className="w-auto justify-center lg:justify-start flex gap-5 items-center">
                <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," />
                <h1 className="text-[26px] leading-[36px] md:text-[45px] text-dark dark:text-white md:leading-[55px] sm:text-[30px] sm:leading-[40px] lg:text-[70px] lg:leading-[75px] uppercase font-semibold">{item.subtitle.split(/-(.+)/)[0]} <span className="text-blueColor">{item.subtitle.split(/-(.+)/)[1] ? `-${item.subtitle.split(/-(.+)/)[1]}` : ''}</span></h1>
                <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," className='overflow-hidden' />
              </div>
              <div className="mt-7 relative  pr-[60px] py-[60px] px-[30px] rounded-lg bg-white dark:bg-black w-auto z-10">
                <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-lg opacity-10 -z-10' />
                <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-lg -z-30 -m-0.5 opacity-10 overflow-hidden' />
                <div className="z-30 w-full">
                  <h1 className='dark:text-white text-ligthText text-[36px] font-medium capitalize'>{item.name}</h1>
                  <p className='text-primaryText font-light dark:text-white leading-6 text-base pt-8 max-w-[650px] w-full'>{item.bio}</p>

                  <div className="mt-[40px] z-40">
                    <Link href="/credential" className="rounded-sm z-30 py-[14px] px-[30px] bg-blueColor text-white capitalize">More about me</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default About