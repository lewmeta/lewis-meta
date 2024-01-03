"use client"
import React, { useState } from 'react'
import Layout from '../Layout'
import { UserGroupIcon } from '@heroicons/react/20/solid'
import CameraIcon, { GithubIcon, PencilIcon } from '../Icon'
import Image from 'next/image'
import Link from 'next/link'
import urlFor from '@/lib/urlFor'

type Props = {
  experience: MyServices[];
}

const Services = ({ experience }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('UI/UX Design');
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <section className='mt-[50px] text-white'>
        <Layout>
          {experience.map((item, index) => (
            <div className="w-full" key={index}>
              <div className="w-full flex flex-wrap relative h-full ">
                <div className="lg:w-[25%] w-full lg:pr-[15px]">
                  <nav className="w-full sticky flex-none top-[18%] md:mb-0 mb-5">
                    <ul className="w-full gap-5 flex flex-col">
                      {item.serviceTitle.map((ser, index) => (
                        <li className={`text-black relative w-full cursor-pointer border border-black/[0.2] dark:border-white/[0.09] bg-white  dark:bg-black py-[30px] rounded-lg overflow-hidden px-[20px] flex items-center ${selectedCategory === `${ser.title}` ? '!bg-blueColor !border-white/[0.09]' : ''}`} onClick={() => handleCategorySelect(ser.title)} key={index}>
                          <div className={`w-[50px] h-[50px] border rounded-lg border-black/[0.2]  dark:border-white/[0.2] flex items-center justify-center p-2 text-blueColor ${selectedCategory === `${ser.title}` ? '!text-white !border-white/[0.2]' : ''}`}>
                              {<PencilIcon/> }
                          </div>
                          <h1 className={`pl-4 text-[16px] font-semibold dark:text-white text-black ${selectedCategory === `${ser.title}` ? '!text-white mb-4 !border-white/[0.2]' : ''}`}>{ser.title}</h1>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="lg:w-[75%] w-full md:mt-5 lg:mt-0 lg:pl-[15px]">
                  {item.servicesInfo.map((serve, index) => (
                    <div className="w-full" key={index}>
                      {selectedCategory == `${serve.title}` && (
                        <div className="w-full dark:bg-black bg-white rounded-lg border border-black/[0.2]  dark:border-white/[0.2] p-[20px] md:[20px] lg:p-[50px] relative">
                          <div className="w-full flex flex-wrap">
                            <div className="w-full md:w-[58.333%]">
                              <div className="w-full rounded-sm overflow-hidden">
                                <Image src={urlFor(serve.image).url()} alt={`${serve.title}`} width={700} height={600} className='object-cover h-[340px]' />
                              </div>
                            </div>
                            <div className="w-full  md:w-[41.666%] md:pl-[15px]">
                              <ul className="relative w-full py-[10px] pr-[30px] pl-[20px] mb-9 md:mt-0 mt-5">
                                <li className='content-[] top-[0px] left-[4px] w-[1px] absolute dark:bg-white/[0.2] bg-black/[0.2] bottom-[-5px]' />
                                {serve.points.map((point, index) => (
                                  <li className="border border-black/[0.09] dark:border-white/[0.05] text-ligthText dark:text-white w-full py-[15px] px-[20px] relative mx-0.5 bg-white dark:bg-black text-sm font-semibold  flex items-center mb-4" key={index}>
                                    <div className='content-[] left-[-22.7px] w-[8px] h-[8px] rounded-full top-1/2 mt-[-5px] bg-blueColor absolute' />
                                    <p className=""> {point.title}</p>
                                  </li>
                                ))}
                              </ul>
                              <Link href="/contact" className="shadow-main hover:bg-transparent border  border-transparent hover:border-black/[0.09] hover:dark:border-white/[0.09] dark:border  rounded-sm text-white bg-blueColor relative mt-[20px] py-[12px] px-[25px] hover:text-black hover:dark:text-white transition-all duration-300 ease-in">Contact for prizing</Link>
                            </div>
                          </div>
                          <div className="mt-[50px]">
                            <span className='w-auto mt-[20px] mb-[10px] border border-black/[0.2] dark:border-white/[0.2] pt-[10px] pr-[40px] pb-[10px] pl-[20px] dark:text-white text-ligthText'><span className='mr-1.5 text-primaryText dark:text-[#999]'></span>{serve.title}</span>

                            <div className="text-base border dark:border-white/[0.2] border-black/[0.2] pt-[30px] px-[20px] pb-[20px] mt-6 text-primaryText dark:text-textDark mb-8">
                              {serve.bioArrays.map((bio, index) => (
                                <p className='font-light py-4' key={index}>{bio.description}</p>
                              ))}
                            </div>

                            {/* Fix the link later */}
                            <span className='py-[8px] w-auto px-[26px] font-medium transition-all duration-200 ease-linear dark:text-white text-black dark:bg-blueColor bg-white border border-black/[0.2] dark:border-transparent rounded-sm hover:text-dark'>View Details</span>
                            <div className="mt-[30px] w-full relative h-[1px] dark:bg-white/[0.1] bg-black/[0.1]" />

                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-[30px] w-full bg-blueColor py-[30px] md:px-[30px] px-[20px] lg:px-[40px] relative overflow-hidden rounded-lg">
                <div className='absolute text-[#eee] top-[-30px] text-[50px] right-[20%] opacity-40 transform scale-[0.5] rotate-45 transition-all duration-300 bottom-0  ease-linear'>
                  <UserGroupIcon />
                </div>
                <div className="content-[] absolute top-[-100px] left-[50px] w-[250px] h-[250px] bg-white/[0.15] transform scale-[1.0] rounded-full" />
                <div className="flex flex-wrap justify-between items-center gap-5">
                  <div className="text-white text-[25px] font-semibold ">Ready to order a project ?</div>
                  <Link href="/contact" className="text-white text-sm font-semibold py-[15px] px-[30px] hover:bg-white hover:text-black transition-all duration-300 ease-in bg-black rounded-sm relative">Get in touch</Link>
                </div>
              </div>
            </div>
          ))}
        </Layout>
      </section>
    </>
  )
}

export default Services