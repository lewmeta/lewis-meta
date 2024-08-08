import React from 'react'

import Link from 'next/link'
import { CircularText } from '../Icon'

type Props = {
  home: HomeProps[];
}
const Hireme = ({home}:Props) => {
  return (
    <div>
        <div className='absolute left-[85%] bottom-[40%] lg:flex hidden justify-center overflow-hidden z-50'>
            <div className='w-32 rounded-full h-auto flex items-center justify-center relative bg-blueColor '>
                <CircularText className={" animate-spin-slow fill-white"}/>
                {home[0].email ? (
                  <Link href={`${home[0].email}`} className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent border border-white/[0.09] border-solid h-20 w-20 text-white rounded-full font-semibold ">Hire me</Link>
                ): (
                  <a href={`mailto:lewisonyango9@gmail.com`} className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent border border-white/[0.09] border-solid h-20 w-20 text-white rounded-full font-semibold ">Hire me</a>
                )}
            </div>
        </div>
    </div>
  )
}

export default Hireme