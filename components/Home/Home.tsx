import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import urlFor from '@/lib/urlFor'
import  {FaDownload} from "react-icons/fa"
import Hireme from './Hireme'

type Props = {
    home: HomeProps[];
}
const Home = ({ home }: Props) => {
    return (
        <>
            <div className='w-full h-full z-10'>
                {home.map((item, index) => (
                    <div className="w-full flex flex-wrap items-center" key={index}>
                        <div className="w-full pr-0 flex-grow-0 flex-shrink-0 basis-auto md:mb-0 min-h-96 mb-7">
                            <div className="w-full h-full relative flex items-center justify-center flex-wrap rounded-3xl z-10 group lg:h-[480px] ">
                                <div className="lg:w-[33.333%] lg:order-1 order-2 w-full h-full rounded-3xl text-center flex-grow-0 flex-shrink-0 basis-auto bg-shadowImageDark items-center justify-center relative md:w-[70%] ">
                                    <Image src={urlFor(item.image).url()} width={800} height={800} alt='me' sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 30vw, " priority className='transform grayscale-0 object-cover w-full lg:w-full  lg:h-full h-[450px] rounded-3xl' />
                                    <Hireme  home={home}/>
                                </div>
                                <div className="flex-grow-0 flex-shrink-0 basis-auto lg:w-[66.666%] w-full lg:order-2 order-1 z-20 lg:mb-0 mb-[50px] md:w-[70%] ">
                                    <div className="w-full flex flex-col lg:mt-0 mt-[50px] lg:pl-[120px]">
                                        <h1 className='dark:text-white text-black lg:text-[60px] lg:leading-[70px]  xl:text-[80px] font-medium xl:leading-[90px] tracking-wider mb-0.5 md:text-[50px] md:leading-[60px] sm:text-[40px] sm:leading-[50px] text-[35px] leading-[45px] uppercase'>Hi👋, I&apos;m <span className="text-blueColor">{item.name}</span>
                                        </h1>
                                        <h1 className='lg:text-[40px] lg:leading-[50px] md:text-[28px] md:leading-[35px] text-[22px] uppercase leading-[28px] font-semibold text-ligthText dark:text-white my-3 mt-6'>{item.title}</h1>
                                        <p className="pt-[30px] text-base font-light max-w-[550px] w-full leading-[26px]">{item.bio}</p>

                                        <div className="w-full flex lg:gap-12 justify-between lg:justify-start items-center mt-[30px] ">
                                            <Link href="/credential" className="py-[13px] px-[26px] w-auto bg-blueColor text-base text-white hover:bg-transparent hover:text-black border border-transparent hover:dark:bg-black hover:dark:border-white/[0.3] rounded-[50px] overflow-hidden  hover:dark:text-white  hover:border-black/[0.09] transition-all duration-300 ease-linear">More about me</Link>
                                            <Link href={item.pdf} download={true} target={"_blank"} className="py-[13px] px-[26px] flex items-center gap-3 w-auto bg-transparent text-base text-white hover:bg-blueColor hover:dark:bg-blueColor hover:text-black border hover:dark:border-transparent hover:border-transparent dark:border-white/[0.3] rounded-[50px] overflow-hidden  hover:dark:text-white  border-black/[0.09] transition-all duration-300 ease-linear"> <FaDownload/> Download CV</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Home