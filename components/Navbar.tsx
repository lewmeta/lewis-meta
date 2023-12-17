"use client"
import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import Link from "next/link"
import useThemeSwitcher from "../components/Hooks/useThemeSwitcher"
import { GithubIcon, TwitterXIcon, InstagramIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icon'
import { FaLinkedinIn, FaInstagram} from 'react-icons/fa'

import { FaCaretUp } from "react-icons/fa"
import { usePathname, useRouter } from 'next/navigation'
import { motion } from "framer-motion"
import ThemeSwitcher from './Hooks/ThemeSwitcher'
import { navVariants } from '@/utils/motion'


const CustomLink = ({ href, title, className = "" }: any) => {
  const currentPath = usePathname();


  return (
    <Link href={href} className={`${className} relative dark:hover:text-white hover:text-blueColor group ${currentPath === href ? 'dark:text-white text-blueColor ' : ''} `}>
      {title}
      <span className={`h-[1px] inline-block bg-blueColor dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in duration-300 ${currentPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </Link>
  );
}
const CustomMobileLink = ({ href, title, className = "", toggle }: any) => {
  const currentPath = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button className={`${className} relative group ${currentPath === href ? 'dark:text-blueColor text-blueColor' : 'dark:text-white/50 text-ligthText/70'} `} onClick={handleClick}>
      {title}
      <span className={`h-[1px] inline-block bg-dark dark:bg-white absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in duration-300 ${currentPath === href ? 'w-full' : 'w-0'}`}>&nbsp;</span>
    </button>
  );
}

const Navbar = () => {
  const { mode, setMode } = useThemeSwitcher()
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMetaHeaderSticky, setIsMetaHeaderSticky] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    function handleScroll() {
      const metaHeader = document.querySelector(".meta-header-area") as HTMLElement;
      const currentScrollPosition = window.scrollY;
      const scrollThreshold = 40;
      if (currentScrollPosition > scrollThreshold) {
        setIsMetaHeaderSticky(true);
        metaHeader.style.display = "block";
      } else if (window.scrollY <= 0) { // check if the user has scrolled to the top of the page
        setIsMetaHeaderSticky(false);
        metaHeader.style.display = "block"; // show the meta header
      } else {
        setIsMetaHeaderSticky(false);
        metaHeader.style.display = "none";
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className='transition-all duration-500 ease-in-out w-full relative z-50'>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView={"show"}
        className={` meta-header-area ${isMetaHeaderSticky ? "fixed h-[100px] bg-lightBlue dark:bg-black p-2 top-0 left-0 right-0  z-50" : ""}  `}>
        <Layout className="">
          <div className="flex items-center justify-between w-full h-full">
            <Link href={"/"} className="items-center justify-between py-6">
              <h1 className="lg:text-4xl text-3xl !-tracking-widest dark:text-white text-black leading-none">Le<span className='-tracking-widest leading-none text-blueColor '>W</span></h1>
            </Link>

            {/* Desktop menu */}
            <div className="w-auto hidden items-center justify-between lg:flex">
              <nav className="relative md:flex flex-wrap items-center hidden justify-between py-2">
                <ul className="flex items-center gap-9 m-0 p-0">
                  <li className="">
                    <CustomLink href={"/"} className='text-base  transition-all duration-500 ease-in decoration-transparent' title="Home" />
                  </li>
                  <li className="">
                    <CustomLink href={"/about"} className='text-base  transition-all duration-500 ease-in decoration-transparent' title="About" />
                  </li>
                  <li className="">
                    <CustomLink href={"/services"} className='text-base  transition-all duration-500 ease-in decoration-transparent' title="Services" />
                  </li>
                  <li className="">
                    <CustomLink href={"/works"} className='text-base  transition-all duration-500 ease-in decoration-transparent' title="Projects" />
                  </li>
                  <li className="">
                    <CustomLink href={"/blog"} className='text-base  transition-all duration-500 ease-in decoration-transparent' title="Articles" />
                  </li>
                  <li className="">
                    <CustomLink href={"/contact"} className='text-base  transition-all duration-500 ease-in decoration-transparent' title="Contact" />
                  </li>
                </ul>
              </nav>
            </div>

            {/* Mobile Menu */}
            {isOpen ?

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
                transition={{ duration: "0.5" }}
                className="w-full fixed lg:hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50  items-center justify-between flex flex-col bg-white dark:bg-black rounded-sm  p-32">
                <nav className="relative md:flex flex-wrap items-center justify-between py-2">
                  <ul className="flex flex-col justify-self-center items-center gap-4 m-0 p-0">
                    <li className="">
                      <CustomMobileLink href={"/"} className='text-base  transition-all duration-500 ease-in decoration-transparent' title="Home" toggle={handleClick} />
                    </li>
                    <li className="">
                      <CustomMobileLink href={"/about"} className='text-base  transition-all duration-500 ease-in decoration-transparent' title="Services" toggle={handleClick} />
                    </li>
                    <li className="">
                      <CustomMobileLink href={"/services"} className='text-base  transition-all duration-500 ease-in decoration-transparent' title="About" toggle={handleClick} />
                    </li>
                    <li className="">
                      <CustomMobileLink href={"/works"} className='text-base  transition-all duration-500 ease-in decoration-transparent' title="Projects" toggle={handleClick} />
                    </li>
                    <li className="">
                      <CustomMobileLink href={"/blog"} className='text-base  transition-all duration-500 ease-in decoration-transparent' title="Articles" toggle={handleClick} />
                    </li>
                    <li className="">
                      <CustomMobileLink href={"/contact"} className='text-base  transition-all duration-500 ease-in decoration-transparent' title="Contact" toggle={handleClick} />
                    </li>
                  </ul>
                </nav>
              </motion.div>
              : null
            }
            <div className="flex items-center justify-end">
              <div className="md:flex hidden items-center w-full gap-2 ">
                <motion.div className="w-[30px] h-[30px] rounded-full text-base group font-semibold transition-all duration-100 ease-in-out bg-blueColor text-white flex items-center justify-center " whileHover={{y:-2}} whileTap={{scale: .9}}>
                  <Link href={"https://instagram"} target='_blank'>
                    <FaInstagram className="text-base " />
                  </Link>
                </motion.div>
                <motion.div className="w-[30px] h-[30px] rounded-full text-base font-semibold transition-all duration-200 ease-in-out bg-blueColor text-white flex items-center justify-center " whileHover={{y:-2}} whileTap={{scale: .9}}>
                  <Link href={"https://instagram"} target='_blank'>
                    <TwitterXIcon className="text-base" />
                  </Link>
                </motion.div>
                <motion.div className="w-[30px] h-[30px] rounded-full text-base font-semibold transition-all duration-200 ease-in-out bg-blueColor text-white flex items-center justify-center " whileHover={{y:-2}} whileTap={{scale: .9}}>
                  <Link href={"https://instagram"} target='_blank'>
                    <FaLinkedinIn className="text-base" />
                  </Link>
                </motion.div>
              </div>
              <div className="lg:hidden lg:mr-0 mr-4 flex flex-col justify-end items-center cursor-pointer" onClick={handleClick}>
                <span className={`w-6 h-0.5 bg-black dark:bg-white block transition-all duration-300 rounded-sm ease-in ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                <span className={`w-6 my-0.5 h-0.5 bg-black dark:bg-white block transition-all duration-300 rounded-sm ease-in ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                <span className={`w-6 h-0.5 bg-black dark:bg-white block transition-all rounded-sm duration-300 ease-in ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
              </div>

              <div className="w-[40px] flex items-end justify-end">
                <button
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  className={`w-[30px] h-[30px] transition-all duration-200 ease-in-out flex border outline-none border-yellow-500 rounded-full  dark:border-yellow-500 items-center justify-center p-1 ${mode === "light" ? " text-yellow-500" : "text-white"}`}
                >
                  {
                    mode === "dark" ? <SunIcon className={"fill-dark"} />
                      : <MoonIcon className={"fill-dark"} />
                  }
                </button>
              </div>
            </div>
          </div>
        </Layout>
      </motion.div>
    </section>
  )
}

export default Navbar