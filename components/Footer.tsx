import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

type Props = {
  navquery: Navbar[]
}
const Footer = ({navquery}:Props) => {
  return (
    <footer className='pt-32 pb-20'>
      <Layout className=''>
        <div className="w-full h-full text-center">
          <Link href={"/"} className='inline-block '>
            <h1 className="lg:text-4xl text-3xl !-tracking-widest  dark:text-white text-black leading-none">Le<span className='-tracking-widest leading-none text-blueColor'>W</span></h1>
          </Link>
          <ul className="mt-8 mx-0 mb-9 p-0 flex items-center justify-center gap-11 flex-wrap">
            <li className="">
              <Link href={"/"} className='text-xs uppercase  hover:dark:text-light hover:text-blueColor transition-all duration-300 font-semibold -tracking-tighter  ease-in decoration-transparent '>Home</Link>
            </li>
            <li className="">
              <Link href={"/about"} className='text-xs uppercase  hover:dark:text-light hover:text-blueColor transition-all duration-300 font-semibold -tracking-tighter  ease-in decoration-transparent '>About</Link>
            </li>
            <li className="">
              <Link href={"/works"} className='text-xs uppercase  hover:dark:text-light hover:text-blueColor transition-all duration-300 font-semibold -tracking-tighter  ease-in decoration-transparent '>Projects</Link>
            </li>
            <li className="">
              <Link href={"/contact"} className='text-xs uppercase  hover:dark:text-light hover:text-blueColor transition-all duration-300 font-semibold -tracking-tighter  ease-in decoration-transparent '>Contact</Link>
            </li>
          </ul>
          {navquery.map((item, index) => (
          <p className="text-primaryText text-sm font-medium" key={index}>
            &copy; 2023 All rights reserved by
            <span className="text-blueColor transition-all duration-300 ease-in hover:dark:text-light hover:text-blueColor ml-1">
              <Link href={`${item.githubLink}`} target='_blank'>@lewismeta</Link>
            </span>
          </p>
          ))}
        </div>
      </Layout>
    </footer>
  )
}

export default Footer