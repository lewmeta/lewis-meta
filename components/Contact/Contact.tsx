import React from 'react'
import { InstagramIcon, TwitterIcon2 } from '../Icon'
import Link from "next/link"

const Contact = () => {
  return (
    <section className='w-full pt-16'>
      <div className="w-full flex justify-between flex-wrap">
        <div className="flex-grow-0 flex-shrink-0 basis-auto lg:w-[30%] w-full lg:mb-0 mb-[30px]">
          <div className="w-full">
            <h1 className="dark:text-white text-dark uppercase mb-8 font-semibold">Contact Info</h1>
            <ul className='space-y-8 mb-12'>
              <li className='flex items-center justify-start'>
                <div className="lg:w-[68px] lg:h-[68px] md:w-[58px] md:h-[58px] sm:w-[45px] sm:h-[45px] w-[50px] h-[50px] flex-none text-center lg:leading-[75px] text-[30px] p-2 text-ligthText dark:text-white dark:bg-black bg-white relative rounded-3xl">
                  <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-30' />
                  <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10' />
                  <InstagramIcon className="text-base text-ligthText dark:text-white" />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                  <span className='dark:text-textDark text-sm opacity-80 block uppercase leading-[19px]'>MAIL US</span>
                  <h4 className='text-ligthText text-base font-medium mb-0 opacity-80 dark:text-white'>info@lewmeta.com</h4>
                  <h4 className='text-ligthText text-base font-medium opacity-80 dark:text-white'>info@bluebase.com</h4>
                </div>
              </li>
              <li className='flex items-center justify-start'>
                <div className="lg:w-[68px] lg:h-[68px] md:w-[58px] md:h-[58px] sm:w-[45px] sm:h-[45px] w-[50px] h-[50px] flex-none text-center lg:leading-[75px] text-[30px] p-2 text-ligthText dark:text-white dark:bg-black bg-white relative rounded-3xl">
                  <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-30' />
                  <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10' />
                  <InstagramIcon className="text-base text-ligthText dark:text-white" />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                  <span className='dark:text-textDark text-sm opacity-80 block uppercase leading-[19px]'>Phone</span>
                  <h4 className='text-ligthText text-base font-medium mb-0 opacity-80 dark:text-white'>0748567120</h4>
                </div>
              </li>
              <li className='flex items-center justify-start'>
                <div className="lg:w-[68px] lg:h-[68px] md:w-[58px] md:h-[58px] sm:w-[45px] sm:h-[45px] w-[50px] h-[50px] flex-none text-center lg:leading-[75px] text-[30px] p-2 text-ligthText dark:text-white dark:bg-black bg-white relative rounded-3xl">
                  <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-30' />
                  <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10' />
                  <InstagramIcon className="text-base text-ligthText dark:text-white" />
                </div>
                <div className="ml-4 flex flex-col justify-center">
                  <span className='dark:text-textDark text-sm opacity-80 block uppercase leading-[19px]'>Location</span>
                  <h4 className='text-ligthText text-base font-medium mb-0 opacity-80 dark:text-white'>Nairbi, Kenya alongside Ruiru road</h4>
                </div>
              </li>
            </ul>
            <h1 className="text-black dark:text-white text-base  uppercase mb-7 font-semibold">Social Info</h1>
            <ul className="gap-5 flex flex-wrap items-center">
              <li className="">
                <Link href={""} target='_blank' className='lg:w-[88px] lg:h-[88px] md:w-[78px] md:h-[78px] sm:w-[65px] sm:h-[65px] w-[60px] h-[60px] block text-center leading-[92px] text-ligthText dark:text-white rounded-full text-3xl transition-all duration-300 ease-in relative lg:p-5 md:p-2 p-2 dark:bg-black bg-white'>
                  <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-full  opacity-25' />
                  <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-full -z-10' />
                  <InstagramIcon />
                </Link>
              </li>
              <li className="">
                <Link href={""} target='_blank' className='lg:w-[88px] lg:h-[88px] md:w-[78px] md:h-[78px] sm:w-[65px] sm:h-[65px] w-[60px] h-[60px] block text-center leading-[92px] text-ligthText dark:text-white rounded-full text-3xl transition-all duration-300 ease-in relative lg:p-5 md:p-2 p-2 dark:bg-black bg-white'>
                  <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-full opacity-25' />
                  <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-full -z-10' />
                  <TwitterIcon2 />
                </Link>
              </li>
              <li className="">
                <Link href={""} target='_blank' className='lg:w-[88px] lg:h-[88px] md:w-[78px] md:h-[78px] sm:w-[65px] sm:h-[65px] w-[60px] h-[60px] block text-center leading-[92px] text-ligthText dark:text-white rounded-full text-3xl transition-all duration-300 ease-in relative lg:p-5 md:p-2 p-2 dark:bg-black bg-white'>
                  <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-full opacity-25' />
                  <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-full -z-10' />
                  <InstagramIcon className="text-[30px]"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-grow-0 flex-shrink-0 basis-auto lg:w-[65%] w-full">
          <div className="w-full flex flex-col  md:p-[30px] p-[20px] lg:p-[40px] relative rounded-3xl dark:bg-black bg-white">
            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25' />
            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-full -z-10' />
            <h1 className='lg:text-[44px] lg:leading-[55px] md:text-[37px] md:leading-[45px] text-[30px] leading-[33px] text-ligthText dark:text-white mb-[30px] font-semibold'>Let’s work <span className='text-blueColor'>together.</span></h1>
            <div className="relative z-20 mt-6">
              <form action="">
                <div className="mb-4">
                  <input type="text" className='w-full outline-none  dark:bg-white/5 bg-primaryText/5 py-[17px] px-5 rounded-lg text-sm block text-white' placeholder='Name *' aria-invalid="false" name='full-name' required aria-required="true" />
                </div>
                <div className="mb-4">
                  <input type="email" className='w-full outline-none dark:bg-white/5 bg-primaryText/5 py-[17px] px-5 rounded-lg text-sm block text-white' placeholder='Email *' aria-invalid="false" name='email' required aria-required="true" />
                </div>
                <div className="mb-4">
                  <input type="text" className='w-full outline-none  dark:bg-white/5 bg-primaryText/5 py-[17px] px-5 rounded-lg text-sm block text-white' placeholder='Subject *' aria-invalid="false" name='subject' required aria-required="true" />
                </div>
                <div className="">
                  <textarea className='w-full  h-[145px] dark:bg-white/5 bg-primaryText/5 py-[17px] px-5 rounded-lg text-sm block dark:text-white text-primaryText outline-none' placeholder='Your message *' aria-invalid="false" name='message' required aria-required="true" />
                </div>
                <button type='submit' typeof='button' className='w-full border-none rounded-lg text-sm mt-4 py-4 px-8 dark:bg-dark bg-dark  text-white font-medium dark:text-white inline-block transition-all  duration-300 ease-in' name='submit' >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact