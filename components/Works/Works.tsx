import React from 'react'
import Image from "next/image"
import project1 from "../../public/images/project/project1.jpeg"
import stars from "../../public/images/star.png"
import Link from 'next/link'

const Works = () => {
  return (
    <section className="pt-16 w-full">
      <div className="w-full flex flex-wrap">
        <div className="lg:w-[31.667%] w-full flex-grow-0 flex-shrink-0 basis-auto lg:pr-4 lg:order-1 order-2">
          <div className="flex lg:flex-col items-start w-full flex-wrap">
            <div className="lg:w-full md:w-1/2 md:pr-2 w-full lg:pr-0 flex-grow-0 flex-shrink-0 basis-auto">
              <div className="w-full py-4 px-4 mb-6 dark:bg-black bg-white relative rounded-3xl ">
                <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10 dark:block hidden' />
                <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10 -m-0.5 dark:block hidden' />
                <Link className='absolute top-0 left-0 w-full h-full z-20 ' href={"/works/work-details/1"}></Link>
                <div className="mb-3 rounded-3xl overflow-hidden w-full">
                  <Image src={project1} sizes="(max-width: 768px) 100vw, (max-width:1200px) 100vw, " alt='project1' className='rounded-3xl object-cover w-full' />
                </div>
                <div className="">
                  <p className='text-[#bcbcbc] opacity-50 text-sm uppercase mb-0.5'>WEB DESIGNING</p>
                  <h1 className='text-xl dark:text-white opacity-90 font-medium'>Dynamic</h1>
                </div>
              </div>
            </div>
            <div className="lg:w-full md:w-1/2 w-full md:pl-2 lg:pl-0 flex-grow-0 flex-shrink-0 basis-auto">
              <div className="w-full py-4 px-4 mb-6 dark:bg-black bg-white relative rounded-3xl">
                <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10 dark:block hidden' />
                <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10 -m-0.5 dark:block hidden' />
                <Link className='absolute top-0 left-0 w-full h-full z-20 ' href={"/works/work-details/2"}></Link>
                <div className="mb-3 rounded-3xl overflow-hidden w-full">
                  <Image src={project1} sizes="(max-width: 768px) 100vw, (max-width:1200px) 100vw, " alt='project1' className='rounded-3xl object-cover w-full' />
                </div>
                <div className="">
                  <p className='text-[#bcbcbc] opacity-50 text-sm uppercase mb-0.5'>WEB DESIGNING</p>
                  <h1 className='text-xl dark:text-white opacity-90 font-medium'>Dynamic</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-[68%] w-full flex-grow-0 flex-shrink-0 basis-auto lg:pl-4 lg:order-2 order-1">
          <div className="w-full mb-3">
            <div className="w-full md:justify-center flex gap-5 items-center text-center justify-center">
              <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," />
              <h1 className="text-[26px] leading-[36px] md:text-[45px] text-dark dark:text-white md:leading-[55px] sm:text-[30px] sm:leading-[40px] lg:text-[70px] lg:leading-[75px] uppercase font-semibold">All Projects</h1>
              <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," className='overflow-hidden' />
            </div>
            <div className="mt-[35px] flex flex-wrap">
              <div className="md:w-1/2 w-full md:pr-2">
                <div className="w-full py-4 px-4 mb-6 dark:bg-black bg-white relative rounded-3xl">
                  <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10 dark:block hidden' />
                  <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10 -m-0.5 dark:block hidden' />
                  <div className="mb-3 rounded-3xl overflow-hidden w-full">
                    <Image src={project1} sizes="(max-width: 768px) 100vw, (max-width:1200px) 100vw, " alt='project1' className='rounded-3xl object-cover w-full' />
                  </div>
                  <div className="">
                    <p className='text-[#bcbcbc] opacity-50 text-sm uppercase mb-0.5'>WEB DESIGNING</p>
                    <h1 className='text-xl dark:text-white opacity-90 font-medium'>Dynamic</h1>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full md:pl-2">
                <div className="w-full py-4 px-4 mb-6 dark:bg-black bg-white relative rounded-3xl">
                  <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10 dark:block hidden' />
                  <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10 -m-0.5 dark:block hidden' />
                  <div className="mb-3 rounded-3xl overflow-hidden w-full">
                    <Image src={project1} sizes="(max-width: 768px) 100vw, (max-width:1200px) 100vw, " alt='project1' className='rounded-3xl object-cover w-full' />
                  </div>
                  <div className="">
                    <p className='text-[#bcbcbc] opacity-50 text-sm uppercase mb-0.5'>WEB DESIGNING</p>
                    <h1 className='text-xl dark:text-white opacity-90 font-medium'>Dynamic</h1>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full md:pr-2">
                <div className="w-full py-4 px-4 mb-6 dark:bg-black bg-white relative rounded-3xl">
                  <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10 dark:block hidden' />
                  <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10 -m-0.5 dark:block hidden' />
                  <div className="mb-3 rounded-3xl overflow-hidden w-full">
                    <Image src={project1} sizes="(max-width: 768px) 100vw, (max-width:1200px) 100vw, " alt='project1' className='rounded-3xl object-cover w-full' />
                  </div>
                  <div className="">
                    <p className='text-[#bcbcbc] opacity-50 text-sm uppercase mb-0.5'>WEB DESIGNING</p>
                    <h1 className='text-xl dark:text-white opacity-90 font-medium'>Dynamic</h1>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full md:pl-2">
                <div className="w-full py-4 px-4 mb-6 dark:bg-black bg-white relative rounded-3xl">
                  <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10 dark:block hidden' />
                  <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10 -m-0.5 dark:block hidden' />
                  <div className="mb-3 rounded-3xl overflow-hidden w-full">
                    <Image src={project1} sizes="(max-width: 768px) 100vw, (max-width:1200px) 100vw, " alt='project1' className='rounded-3xl object-cover w-full' />
                  </div>
                  <div className="">
                    <p className='text-[#bcbcbc] opacity-50 text-sm uppercase mb-0.5'>WEB DESIGNING</p>
                    <h1 className='text-xl dark:text-white opacity-90 font-medium'>Dynamic</h1>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works