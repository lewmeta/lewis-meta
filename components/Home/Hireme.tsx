import React from 'react'

import Link from 'next/link'
import { CircularText } from '../Icon'
const Hireme = () => {
  return (
    <div>
        <div className='absolute left-0 bottom-0 flex justify-center overflow-hidden z-50'>
            <div className='w-28 rounded-full h-auto flex items-center justify-center relative bg-dark/[0.5] '>
                <CircularText className={"fill-blueColor animate-spin-slow"}/>
                <Link href="mailto:lewisonyango9@gmail.com" className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent border border-white/[0.09] border-solid h-20 w-20 text-light rounded-full font-semibold hover:bg-light hover:text-dark transition">Hire me</Link>
            </div>
        </div>
    </div>
  )
}

export default Hireme