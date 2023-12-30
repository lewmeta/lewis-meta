import React from 'react'
import { InstagramIcon, TwitterIcon2 } from '../Icon'
import Link from "next/link"
import { FaAddressCard, FaMapMarked, FaPhone, FaPhoneAlt } from "react-icons/fa"
import { BiEnvelope, BiVoicemail } from "react-icons/bi"
import { PhoneArrowDownLeftIcon } from '@heroicons/react/24/outline'

type Props = {
  contactInfo:ContactInfo[];
}
const Contact = ({contactInfo}:Props) => {
  return (
    <section className='w-full pt-10'>
      <div className="w-full relative flex flex-wrap md:gap-0 gap-5">
        <div className="lg:w-[33.33%] md:w-1/2 lg:pl-0 md:p-[15px] w-full">
          <div className="w-full mx-0 relative dark:shadow-new border dark:border-white/[0.09] border-black/[0.09] dark:bg-black bg-lightBlue pt-[30px] px-[25px] pb-[30px] rounded-lg flex">
            <div className="w-[50px] h-[50px] rounded-sm text-base font-semibold transition-all duration-200 ease-in-out bg-blueColor text-white flex items-center justify-center">
              <FaPhoneAlt className="text-2xl" />
            </div>
            <div className="block flex-1 pl-4">
              <h1 className='dark:text-white text-ligthText font-semibold text-base'>{contactInfo[0].subtitle}</h1>
              <p className='py-[5px] text-base font-light'>{contactInfo[0].description}</p>
              <Link href={"tel:0748567120"} target='_blank' className='text-blueColor text-sm font-semibold uppercase' >(+254) - {contactInfo[0].title}</Link>
            </div>
          </div>
        </div>
        <div className="lg:w-[33.33%] md:p-[15px] md:w-1/2 w-full">
          <div className="w-full mx-0 relative dark:shadow-new border dark:border-white/[0.09] border-black/[0.09] dark:bg-black bg-lightBlue pt-[30px] px-[25px] pb-[30px] rounded-lg flex">
            <div className="w-[50px] h-[50px] rounded-sm text-base font-semibold transition-all duration-200 ease-in-out bg-blueColor text-white flex items-center justify-center">
              <BiEnvelope className="text-2xl inline-block" />
            </div>
            <div className="block flex-1 pl-4 ">
              <h1 className='dark:text-white text-ligthText font-semibold text-base'>{contactInfo[1].subtitle}</h1>
              <p className='py-[5px] text-base font-light'>{contactInfo[1].description}</p>
              <Link href={`mailto:${contactInfo[1].title}`} target='_blank' className='text-blueColor text-sm font-semibold uppercase' >{contactInfo[1].title}</Link>
            </div>
          </div>
        </div>
        <div className="lg:w-[33.33%] md:p-[15px] lg:pr-0 md:w-1/2 w-full">
          <div className="w-full mx-0 relative dark:shadow-new border dark:border-white/[0.09] border-black/[0.09] dark:bg-black bg-lightBlue pt-[30px] px-[25px] pb-[30px] rounded-lg flex">
            <div className="w-[50px] h-[50px] rounded-sm text-base font-semibold transition-all duration-200 ease-in-out bg-blueColor text-white flex items-center justify-center">
              <FaMapMarked className="text-2xl inline-block" />
            </div>
            <div className="block flex-1 pl-4 ">
              <h1 className='dark:text-white text-ligthText font-semibold text-base'>{contactInfo[2].subtitle}</h1>
              <p className='py-[5px] text-base font-light'>{contactInfo[2].description}</p>
              <h1 className='text-blueColor text-sm font-semibold uppercase' >{contactInfo[2].title}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact