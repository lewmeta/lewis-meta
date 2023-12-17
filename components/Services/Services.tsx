"use client"
import React, { useState } from 'react'
import Layout from '../Layout'
import { UserGroupIcon } from '@heroicons/react/20/solid'
import CameraIcon, { PencilIcon } from '../Icon'
import Image from 'next/image'
import me from "../../public/images/me.png"
import { DribbbleIcon, GithubIcon, InstagramIcon, TwitterIcon2 } from "../Icon"
import Link from 'next/link'
const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('UI/UX Design');
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <section className='mt-[50px] text-white'>
        <Layout>
          <div className="w-full flex flex-wrap relative h-full ">
            <div className="lg:w-[25%] w-full lg:pr-[15px]">
              <nav className="w-full sticky flex-none top-[18%]">
                <ul className="w-full gap-5 flex flex-col">
                  <li className={`text-black relative w-full cursor-pointer border border-black/[0.2] dark:border-white/[0.09] bg-white  dark:bg-black py-[30px] rounded-lg overflow-hidden px-[20px] flex items-center ${selectedCategory === "UI/UX Design" ? '!bg-blueColor !border-white/[0.09]' : ''}`} onClick={() => handleCategorySelect('UI/UX Design')}>
                    <div className={`w-[50px] h-[50px] border rounded-lg border-black/[0.2]  dark:border-white/[0.2] flex items-center justify-center p-2 text-blueColor ${selectedCategory === "UI/UX Design" ? '!text-white !border-white/[0.2]' : ''}`}>
                      <PencilIcon />
                    </div>
                    <h1 className={`pl-4 text-[16px] font-semibold dark:text-white text-black ${selectedCategory === "UI/UX Design" ? '!text-white !border-white/[0.2]' : ''}`}>UI/UX Design</h1>
                  </li>
                  <li className={`text-black relative w-full cursor-pointer border border-black/[0.2] dark:border-white/[0.09] bg-white  dark:bg-black py-[30px] rounded-lg overflow-hidden px-[20px] flex items-center ${selectedCategory === "Web Development" ? '!bg-blueColor !border-white/[0.09]' : ''}`} onClick={() => handleCategorySelect('Web Development')}>
                    <div className={`w-[50px] h-[50px] border rounded-lg border-black/[0.2]  dark:border-white/[0.2] flex items-center justify-center p-2 text-blueColor ${selectedCategory === "Web Development" ? '!text-white !border-white/[0.2]' : ''}`}>
                      <PencilIcon />
                    </div>
                    <h1 className={`pl-4 text-[16px] font-semibold dark:text-white text-black ${selectedCategory === "Web Development" ? '!text-white !border-white/[0.2]' : ''}`}>Web Development</h1>
                  </li>
                  <li className={`text-black relative w-full cursor-pointer border border-black/[0.2] dark:border-white/[0.09] bg-white  dark:bg-black py-[30px] rounded-lg overflow-hidden px-[20px] flex items-center ${selectedCategory === "SEO Optimization" ? '!bg-blueColor !border-white/[0.09]' : ''}`} onClick={() => handleCategorySelect('SEO Optimization')}>
                    <div className={`w-[50px] h-[50px] border rounded-lg border-black/[0.2]  dark:border-white/[0.2] flex items-center justify-center p-2 text-blueColor ${selectedCategory === "SEO Optimization" ? '!text-white !border-white/[0.2]' : ''}`}>
                      <PencilIcon />
                    </div>
                    <h1 className={`pl-4 text-[16px] font-semibold dark:text-white text-black ${selectedCategory === "SEO Optimization" ? '!text-white !border-white/[0.2]' : ''}`}>SEO Optimization</h1>
                  </li>

                </ul>
              </nav>
            </div>
            <div className="lg:w-[75%] w-full lg:pl-[15px]">
              {selectedCategory == "UI/UX Design" && (
                <div className="w-full dark:bg-black bg-white rounded-lg border border-black/[0.2]  dark:border-white/[0.2] p-[50px] relative">
                  <div className="w-full flex flex-wrap">
                    <div className="w-full md:w-[58.333%] md:pr-[15px]">
                      <div className="w-full rounded-sm overflow-hidden">
                        <Image src={"/images/3.jpg"} alt='3' width={700} height={600} className='object-cover' />
                      </div>
                    </div>
                    <div className="w-full  md:w-[41.666%] md:pl-[15px]">
                      <ul className="relative w-full py-[10px] pr-[30px] pl-[20px] mb-9">
                        <li className='content-[] top-[0px] left-[4px] w-[1px] absolute dark:bg-white/[0.2] bg-black/[0.2] bottom-[-5px]' />
                        <li className="border border-black/[0.09] dark:border-white/[0.05] text-ligthText dark:text-white w-full py-[15px] px-[20px] relative mx-0.5 bg-white dark:bg-black text-sm font-semibold  flex items-center mb-4">
                          <div className='content-[] left-[-22.7px] w-[8px] h-[8px] rounded-full top-1/2 mt-[-5px] bg-blueColor absolute' />
                          <p className=""> Flayers / Branding</p>
                        </li>
                        <li className="border border-black/[0.09] dark:border-white/[0.05] bg-white  text-ligthText dark:text-white w-full py-[15px] px-[20px] relative mt-4 mx-0.5 dark:bg-black text-sm font-semibold  flex items-center">
                          <div className='content-[] left-[-22.7px] w-[8px] h-[8px] rounded-full top-1/2 mt-[-5px] bg-blueColor absolute' />
                          <p className=""> Marketing / Development</p>
                        </li>
                        <li className="border border-black/[0.09] dark:border-white/[0.05] text-ligthText dark:text-white w-full py-[15px] px-[20px] relative mt-4 mx-0.5 bg-white dark:bg-black text-sm font-semibold  flex items-center">
                          <div className='content-[] left-[-22.7px] w-[8px] h-[8px] rounded-full top-1/2 mt-[-5px] bg-blueColor absolute' />
                          <p className=""> User inerface / Photography</p>
                        </li>
                      </ul>
                      <span className="shadow-main rounded-sm text-white bg-blueColor relative mt-[20px] py-[12px] px-[25px]">1190-2250 $</span>
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <span className='w-auto mt-[20px] mb-[10px] border border-black/[0.2] dark:border-white/[0.2] pt-[10px] pr-[40px] pb-[10px] pl-[20px] dark:text-white text-ligthText'><span className='mr-1.5 text-primaryText dark:text-[#999]'>01. </span>UI/UX Design</span>

                    <div className="text-base border dark:border-white/[0.2] border-black/[0.2] pt-[30px] px-[20px] pb-[20px] mt-6 text-primaryText dark:text-textDark mb-8">
                      <p className='font-light py-4'>Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Curabitur convallis fringilla diam sed aliquam.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p className='font-light py-4'>Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <Link href={""} className='py-[8px] px-[26px] font-medium transition-all duration-200 ease-linear dark:text-white text-black dark:bg-blueColor bg-white border border-black/[0.2] dark:border-transparent rounded-sm hover:bg-amber-500 hover:text-dark'>View Details</Link>
                    <div className="mt-[30px] w-full relative h-[1px] dark:bg-white/[0.1] bg-black/[0.1]" />

                  </div>
                </div>
              )}
              {selectedCategory == "Web Development" && (
                <div className="w-full dark:bg-black bg-white rounded-lg border border-black/[0.2]  dark:border-white/[0.2] p-[50px] relative">
                  <div className="w-full flex flex-wrap">
                    <div className="w-full md:w-[58.333%] md:pr-[15px]">
                      <div className="w-full rounded-sm h-[320px] overflow-hidden">
                        <Image src={"/images/1.jpg"} alt='3' width={700} height={600} className='object-cover transform grayscale-100 h-full' />
                      </div>
                    </div>
                    <div className="w-full  md:w-[41.666%] md:pl-[15px]">
                      <ul className="relative w-full py-[10px] pr-[30px] pl-[20px] mb-9">
                        <li className='content-[] top-[0px] left-[4px] w-[1px] absolute dark:bg-white/[0.2] bg-black/[0.2] bottom-[-5px]' />
                        <li className="border border-black/[0.09] dark:border-white/[0.05] text-ligthText dark:text-white w-full py-[15px] px-[20px] relative mx-0.5 bg-white dark:bg-black text-sm font-semibold  flex items-center mb-4">
                          <div className='content-[] left-[-22.7px] w-[8px] h-[8px] rounded-full top-1/2 mt-[-5px] bg-blueColor absolute' />
                          <p className=""> Flayers / Branding</p>
                        </li>
                        <li className="border border-black/[0.09] dark:border-white/[0.05] bg-white  text-ligthText dark:text-white w-full py-[15px] px-[20px] relative mt-4 mx-0.5 dark:bg-black text-sm font-semibold  flex items-center">
                          <div className='content-[] left-[-22.7px] w-[8px] h-[8px] rounded-full top-1/2 mt-[-5px] bg-blueColor absolute' />
                          <p className=""> Marketing / Development</p>
                        </li>
                        <li className="border border-black/[0.09] dark:border-white/[0.05] text-ligthText dark:text-white w-full py-[15px] px-[20px] relative mt-4 mx-0.5 bg-white dark:bg-black text-sm font-semibold  flex items-center">
                          <div className='content-[] left-[-22.7px] w-[8px] h-[8px] rounded-full top-1/2 mt-[-5px] bg-blueColor absolute' />
                          <p className=""> User inerface / Photography</p>
                        </li>
                      </ul>
                      <span className="shadow-main rounded-sm text-white bg-blueColor relative mt-[20px] py-[12px] px-[25px]">1190-2250 $</span>
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <span className='w-auto mt-[20px] mb-[10px] border border-black/[0.2] dark:border-white/[0.2] pt-[10px] pr-[40px] pb-[10px] pl-[20px] dark:text-white text-ligthText'><span className='mr-1.5 text-primaryText dark:text-[#999]'>02. </span>Web Development</span>

                    <div className="text-base border dark:border-white/[0.2] border-black/[0.2] pt-[30px] px-[20px] pb-[20px] mt-6 text-primaryText dark:text-textDark mb-8">
                      <p className='font-light py-4'>Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Curabitur convallis fringilla diam sed aliquam.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p className='font-light py-4'>Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <Link href={""} className='py-[8px] px-[26px] font-medium transition-all duration-200 ease-linear dark:text-white text-black dark:bg-blueColor bg-white border border-black/[0.2] dark:border-transparent rounded-sm hover:bg-amber-500 hover:text-dark'>View Details</Link>
                    <div className="mt-[30px] w-full relative h-[1px] dark:bg-white/[0.1] bg-black/[0.1]" />
                  </div>
                </div>
              )}
              {selectedCategory == "SEO Optimization" && (
                <div className="w-full dark:bg-black bg-white rounded-lg border border-black/[0.2]  dark:border-white/[0.2] p-[50px] relative">
                  <div className="w-full flex flex-wrap">
                    <div className="w-full md:w-[58.333%] md:pr-[15px]">
                      <div className="w-full rounded-sm overflow-hidden">
                        <Image src={"/images/2.jpg"} alt='3' width={700} height={600} className='object-cover' />
                      </div>
                    </div>
                    <div className="w-full  md:w-[41.666%] md:pl-[15px]">
                      <ul className="relative w-full py-[10px] pr-[30px] pl-[20px] mb-9">
                        <li className='content-[] top-[0px] left-[4px] w-[1px] absolute dark:bg-white/[0.2] bg-black/[0.2] bottom-[-5px]' />
                        <li className="border border-black/[0.09] dark:border-white/[0.05] text-ligthText dark:text-white w-full py-[15px] px-[20px] relative mx-0.5 bg-white dark:bg-black text-sm font-semibold  flex items-center mb-4">
                          <div className='content-[] left-[-22.7px] w-[8px] h-[8px] rounded-full top-1/2 mt-[-5px] bg-blueColor absolute' />
                          <p className=""> Flayers / Branding</p>
                        </li>
                        <li className="border border-black/[0.09] dark:border-white/[0.05] bg-white  text-ligthText dark:text-white w-full py-[15px] px-[20px] relative mt-4 mx-0.5 dark:bg-black text-sm font-semibold  flex items-center">
                          <div className='content-[] left-[-22.7px] w-[8px] h-[8px] rounded-full top-1/2 mt-[-5px] bg-blueColor absolute' />
                          <p className=""> Marketing / Development</p>
                        </li>
                        <li className="border border-black/[0.09] dark:border-white/[0.05] text-ligthText dark:text-white w-full py-[15px] px-[20px] relative mt-4 mx-0.5 bg-white dark:bg-black text-sm font-semibold  flex items-center">
                          <div className='content-[] left-[-22.7px] w-[8px] h-[8px] rounded-full top-1/2 mt-[-5px] bg-blueColor absolute' />
                          <p className=""> User inerface / Photography</p>
                        </li>
                      </ul>
                      <span className="shadow-main rounded-sm text-white bg-blueColor relative mt-[20px] py-[12px] px-[25px]">1190-2250 $</span>
                    </div>
                  </div>
                  <div className="mt-[50px]">
                    <span className='w-auto mt-[20px] mb-[10px] border border-black/[0.2] dark:border-white/[0.2] pt-[10px] pr-[40px] pb-[10px] pl-[20px] dark:text-white text-ligthText'><span className='mr-1.5 text-primaryText dark:text-[#999]'>03. </span>SEO Optimization</span>

                    <div className="text-base border dark:border-white/[0.2] border-black/[0.2] pt-[30px] px-[20px] pb-[20px] mt-6 text-primaryText dark:text-textDark mb-8">
                      <p className='font-light py-4'>Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Curabitur convallis fringilla diam sed aliquam.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      <p className='font-light py-4'>Quis nostrud exercitation ullamco laboris nisi ut aliquip exea. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <Link href={""} className='py-[8px] px-[26px] font-medium transition-all duration-200 ease-linear dark:text-white text-black dark:bg-blueColor bg-white border border-black/[0.2] dark:border-transparent rounded-sm hover:bg-amber-500 hover:text-dark'>View Details</Link>
                    <div className="mt-[30px] w-full relative h-[1px] dark:bg-white/[0.1] bg-black/[0.1]" />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-[30px] w-full bg-blueColor py-[30px] px-[40px] relative overflow-hidden rounded-lg">
            <div className='absolute text-[#eee] top-[-30px] text-[50px] right-[20%] opacity-40 transform scale-[0.5] rotate-45 transition-all duration-300 bottom-0  ease-linear'>
              <UserGroupIcon />
            </div>
            <div className="content-[] absolute top-[-100px] left-[50px] w-[250px] h-[250px] bg-white/[0.15] transform scale-[1.0] rounded-full" />
            <div className="flex flex-wrap justify-between items-center gap-5">
              <div className="text-white text-[25px] font-semibold ">Ready to order a project ?</div>
              <Link href="" className="text-white text-sm font-semibold py-[15px] px-[30px] bg-black rounded-sm relative">Get in touch</Link>
            </div>
          </div>
        </Layout>
      </section>
    </>
  )
}

export default Services