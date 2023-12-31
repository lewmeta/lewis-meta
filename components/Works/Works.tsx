import React from 'react'
import Image from "next/image"
import stars from "../../public/images/star.png"
import Link from 'next/link'
import { GithubIcon } from '../Icon'
import urlFor from '@/lib/urlFor'

type Props = {
  project: Projects[];
}
const Works = ({ project }: Props) => {
  const firstPart = project.slice(0, 2); // Get the first 2 posts
  const secondPart = project.slice(2); // Get the remaining 4 posts
  return (
    <section className="pt-16 w-full">
      <div className="w-full flex flex-wrap">
        <div className="lg:w-[36.667%] w-full flex-grow-0 flex-shrink-0 basis-auto lg:pr-4 lg:order-1 order-2">
          {firstPart && (
            <div className="flex lg:flex-col items-start w-full flex-wrap sticky top-[20%]">
              {firstPart.map((item, index) => (
                <div className="lg:w-full  md:pr-2 w-full lg:pr-0 flex-grow-0 flex-shrink-0 basis-auto" key={index}>
                  <div className="w-full py-4 px-4 mb-6 dark:bg-black bg-white relative rounded-lg sm:rounded-xl ">
                    <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-lg sm:rounded-xl opacity-25 -z-10 dark:block hidden' />
                    <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-lg sm:rounded-xl -z-10 -m-0.5 dark:block hidden' />
                    <div className="mb-3 rounded-lg sm:rounded-xl overflow-hidden w-full sm:h-[300px] h-[180px] md:h-[360px] lg:h-[230px]">
                      <Image src={urlFor(item.mainImage).url()} sizes="(max-width: 768px) 100vw, (max-width:1200px) 100vw, " width={800} height={800} alt='project1' className='object-cover w-full h-full' />
                    </div>
                    <div className="z-20 w-full">
                      <h1 className='text-xl dark:text-white opacity-90 font-medium'>{item.title}</h1>
                      <p className='dark:text-[#bcbcbc] text-dark/80 opacity-50 text-sm  mb-0.5'>{item.description}</p>
                      <div className="flex items-center justify-between flex-wrap gap-4 md:gap-0 w-full mt-4">
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <span className={"text-dark dark:text-white w-6 h-6 "}>
                          {item.githubLink ? (
                            <Link href={`${item.githubLink}`} target='_blank'>
                              <GithubIcon className={""} />
                            </Link>
                          ) : (
                            <Link href={`/works/work-details/${item.slug.current}`} target='_blank'>
                              <GithubIcon className={""} />
                            </Link>
                          )}
                        </span>
                        <div className="py-2 sm:py-[10px] px-[20px] text-light rounded-md hover:bg-white hover:text-dark transition-all duration-300 ease-in border border-solid border-transparent hover:border-dark/10 bg-dark dark:bg-white dark:text-dark hover:dark:text-white hover:dark:bg-black hover:dark:border-white/30 ">
                          <Link href={`/works/work-details/${item.slug.current}`} className='bg-none outline-none md:text-sm text-xs border-none visited:outline-none visited:border-none visited:bg-transparent hover:bg-transparen w-full'>View Project</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>

          )}
        </div>
        <div className="lg:w-[63%] w-full flex-grow-0 flex-shrink-0 basis-auto lg:pl-4 lg:order-2 order-1">
          <div className="w-full mb-3 relative">
            <div className="w-full md:justify-center flex gap-5 items-center text-center justify-center">
              <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," />
              <h1 className="text-[26px] leading-[36px] md:text-[45px] text-dark dark:text-white md:leading-[55px] sm:text-[30px] sm:leading-[40px] lg:text-[70px] lg:leading-[75px] uppercase font-semibold">All <span className="text-blueColor">Projects</span></h1>
              <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," className='overflow-hidden' />
            </div>
            {secondPart && (
              <div className="my-[35px] flex flex-wrap">
                {secondPart.map((item, index) => (
                  <div className="w-full md:pr-2 mb-4" key={index}>
                    <div className="w-full py-4 px-4 mb-6 h-full dark:bg-black bg-white relative rounded-lg sm:rounded-xl md:rounded-3xl">
                      <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 -z-10 dark:block hidden' />
                      <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl !-z-10 -m-0.5 dark:block hidden' />
                      <div className="mb-3 rounded-lg sm:rounded-xl md:rounded-3xl overflow-hidden w-full sm:h-[300px] h-[180px] md:h-[360px]">
                        <Image src={urlFor(item.mainImage).url()} width={800} height={800} sizes="(max-width: 768px) 100vw, (max-width:1200px) 100vw, " alt='project1' className='object-cover w-full h-full' />
                      </div>
                      <div className="z-20 w-full">
                        <h1 className='text-xl dark:text-white opacity-90 font-medium'>{item.title}</h1>
                        <p className='dark:text-[#bcbcbc] text-dark/80 opacity-50 text-sm  mb-0.5'>{item.description}</p>
                        <div className="flex items-center justify-between flex-wrap gap-4 md:gap-0 w-full mt-4">
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <span className={"text-dark dark:text-white w-6 h-6 "}>
                            {item.githubLink ? (
                              <Link href={`${item.githubLink}`} target='_blank'>
                                <GithubIcon className={""} />
                              </Link>
                            ) : (
                              <Link href={`/works/work-details/${item.slug.current}`} target='_blank'>
                                <GithubIcon className={""} />
                              </Link>
                            )}
                          </span>
                          <div className="py-2 sm:py-[10px] px-[20px] text-light rounded-md hover:bg-white hover:text-dark transition-all duration-300 ease-in border border-solid border-transparent hover:border-dark/10 bg-dark dark:bg-white dark:text-dark hover:dark:text-white hover:dark:bg-black hover:dark:border-white/30 ">
                            <Link href={`/works/work-details/${item.slug.current}`} className='bg-none outline-none md:text-sm text-xs border-none visited:outline-none visited:border-none visited:bg-transparent hover:bg-transparen w-full'>View Project</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works