import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import me from "../../public/images/lew.jpg"
import urlFor from '@/lib/urlFor'

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
                            <div className="w-full h-full relative flex items-center flex-wrap rounded-3xl z-10 group lg:h-[550px] ">
                                <div className="lg:w-[33.333%] lg:order-1 order-2 w-full h-full rounded-3xl text-center flex-grow-0 flex-shrink-0 basis-auto bg-shadowImageDark items-center justify-center relative">
                                    <Image src={urlFor(item.image).url()} width={800} height={800} alt='me' sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 30vw, " priority className='transform grayscale-0 object-cover w-full lg:w-full lg:h-full h-[500px] lg:rounded-3xl' />
                                    {/* <Hireme /> */}
                                </div>
                                <div className="flex-grow-0 flex-shrink-0 basis-auto lg:w-[66.666%] w-full lg:order-2 order-1 z-20 lg:mb-0 mb-[50px] ">
                                    <div className="w-full flex flex-col lg:mt-0 mt-[50px] lg:pl-[120px]">
                                        {/* <Hireme /> */}
                                        <h1 className='dark:text-white text-black lg:text-[60px] lg:leading-[70px]  xl:text-[80px] font-medium xl:leading-[90px] tracking-wider mb-0.5 md:text-[50px] md:leading-[60px] sm:text-[40px] sm:leading-[50px] text-[35px] leading-[45px]'>Hi, I&apos;m <span className="text-blueColor">{item.name}</span>
                                        </h1>
                                        <h1 className='lg:text-[40px] lg:leading-[50px] md:text-[28px] md:leading-[35px] text-[22px] leading-[28px] font-semibold text-ligthText dark:text-white my-3'>{item.title}</h1>
                                        <p className="pt-[30px] text-base font-light max-w-[550px] w-full leading-[26px]">{item.bio}</p>

                                        <div className="w-full flex gap-6 items-center mt-[30px] ">
                                            <Link href="/credential" className="py-[13px] px-[26px] w-auto bg-blueColor text-base text-white hover:bg-white hover:text-black border border-transparent hover:dark:bg-black hover:dark:border-white/[0.3] rounded-sm overflow-hidden  hover:dark:text-white  hover:border-black/[0.09] transition-all duration-300 ease-linear">More about me</Link>
                                            <Link href="/dummy.pdf" download={true} target={"_blank"} className="py-[13px] px-[26px] w-auto bg-blueColor text-base text-white ">Download CV</Link>
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