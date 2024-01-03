
import Image from "next/image"
import urlFor from "@/lib/urlFor"
import Link from "next/link";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import Refractor from "react-refractor";
import js from 'refractor/lang/javascript'
import ts from 'refractor/lang/typescript'
import py from 'refractor/lang/python'
import "prismjs/themes/prism-tomorrow.css";


type Props = {
    project: Projects;
}
Refractor.registerLanguage(js)
Refractor.registerLanguage(ts)
Refractor.registerLanguage(py)

const WorkDetails = ({ project }: Props) => {
    return (
        <section className="w-full pt-[0px]">
            <div className="">
                <div className="relative flex items-center justify-center gap-5 mb-[30px] text-[56px] w-auto">
                    <h1 className="text-[20px] leading-[26px] lg:text-[56px] text-dark dark:text-white md:text-[40px] md:leading-[55px] lg:leading-[65px] sm:text-[30px] sm:leading-[40px] uppercase font-semibold relative mb-6 flex items-center text-center justify-start">{project.title}
                    </h1>
                </div>
            </div>
            <div className="sm:[350px] h-[250px] md:h-[400px] lg:h-[500px] w-full mb-[50px] overflow-hidden rounded-3xl relative">
                <div className="absolute bottom-20 md:bottom-8 left-8">
                    <Link href={`${project.githubLink}`} target="_blank" className="bg-blueColor text-xs px-[20px] py-2.5 flex items-center gap-2 text-white rounded-lg uppercase ">
                        <FaGithub className={"text-[18px] md:text-[23px]"} />
                        Visit project
                    </Link>
                </div>
                <div className="absolute bottom-8 left-8 md:left-auto md:right-8">
                    {project.liveSite ? (
                        <Link href={`${project.liveSite}`} target="_blank" className="bg-blueColor text-xs px-[20px] py-2.5 flex items-center gap-2 text-white rounded-lg uppercase ">
                            <FaEye className={"text-[18px] md:text-[23px]"} />
                            Live preview this project
                        </Link>
                    ) : (
                        <span className="bg-blueColor uppercase text-xs px-[20px] py-2.5 flex items-center gap-2 text-white rounded-lg ">
                            <FaEyeSlash className={"text-[18px] md:text-[23px]"} />
                            Live preview coming soon
                        </span>
                    )}

                </div>
                <Image src={urlFor(project.mainImage).url()} width={800} height={600} sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," alt="project1" className="w-full h-full object-cover rounded-3xl" />
            </div>
            <div>
                <div className="flex flex-wrap w-full relative md:p-[28] sm:p-6 p-0 lg:p-[36px] md:dark:bg-black md:bg-white rounded-3xl">
                    <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10 dark:block hidden' />
                    <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10 dark:block hidden opacity-10' />
                    <div className="lg:w-1/2 w-full flex-grow-0 flex-shrink-0 basis-auto lg:pr-2 mb-[40px] lg:mb-0 ">
                        <div className="w-full relative p-[24px] z-20 rounded-3xl dark:bg-black bg-[#FBFBFC]">
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10  dark:block hidden' />
                            <h3 className="dark:text-textDark dark:opacity-50 text-lg capitalize font-medium tracking-tighter text-ligthText mb-3.5">{project.title}</h3>
                            <p className="dark:text-white dark:opacity-80 text-base mb-5 text-black opacity-40">{project.bioArrays[0].description}</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex-grow-0 flex-shrink-0 basis-auto lg:pl-2 ">
                        <div className="w-full relative p-[24px] z-20 rounded-3xl dark:bg-black bg-[#FBFBFC]">
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10  dark:block hidden' />
                            <h3 className="dark:text-textDark dark:opacity-50 text-lg capitalize font-medium tracking-tighter text-ligthText mb-3.5">About {project.title}</h3>
                            <p className="dark:text-white dark:opacity-80 text-base mb-5 text-black opacity-40">{project.bioArrays[1].description}</p>

                        </div>
                    </div>
                </div>
                <div className="sm:[350px] h-[250px] md:h-[400px] w-full my-[50px] mb-[30px] rounded-3xl overflow-hidden">
                    <Image src={urlFor(project.imageArrays[0].image).url()} width={800} height={800} sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," alt="project1" className="w-full h-full object-cover" />
                </div>
                <div className="w-full flex flex-wrap">
                    <div className="lg:w-1/2 w-full flex-grow-0 flex-shrink-0 basis-auto lg:pr-4 mb-[40px] lg:mb-0 ">
                        <div className="w-full sm:[350px] h-[250px] md:h-[400px] rounded-3xl overflow-hidden">
                            <Image src={urlFor(project.imageArrays[1].image).url()} width={800} height={800} sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," alt="project1" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex-grow-0 flex-shrink-0 basis-auto lg:pl-4 ">
                        <div className="w-full sm:[350px] h-[250px] md:h-[400px] rounded-3xl overflow-hidden">
                            <Image src={urlFor(project.imageArrays[2].image).url()} width={800} height={800} sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," alt="project1" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                {project.myCodeField.language && (
                    <div className="flex flex-wrap w-full relative md:p-[28] sm:p-6 p-0 lg:p-[36px] md:dark:bg-black md:bg-white rounded-3xl mt-[50px]">
                        <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10 dark:block hidden' />
                        <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10 dark:block hidden opacity-10' />
                        {project.bioArrays[3] && (
                            <div className="w-full flex-grow-0 order-2 mt-5 flex-shrink-0 basis-auto lg:pr-2 mb-[40px] lg:mb-0 ">
                                <div className="w-full relative p-[24px] z-20 rounded-3xl dark:bg-black bg-[#FBFBFC]">
                                    <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10  dark:block hidden' />
                                    <p className="dark:text-white dark:opacity-80 text-base mb-5 text-black opacity-40">{project.bioArrays[3].description}</p>
                                </div>
                            </div>
                        )}
                        <div className="w-full flex-grow-0 order-1 flex-shrink-0 basis-auto mt-6 lg:pl-2 ">
                            <div className="w-full relative p-[24px] z-20 rounded-3xl dark:bg-black bg-[#FBFBFC]">
                                <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10  dark:block hidden' />
                                {/* <h3 className="dark:text-textDark dark:opacity-50 text-lg capitalize font-medium tracking-tighter text-ligthText mb-3.5">About {project.title}</h3> */}

                                {project.bioArrays[4] && (
                                    <p className="dark:text-white dark:opacity-80 text-base mb-5 text-black opacity-40">{project.bioArrays[3].description}</p>
                                )}
                                {project.myCodeField.language && (
                                    <Refractor
                                        language={project.myCodeField?.language}
                                        value={project.myCodeField.code}
                                    />
                                )}
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </section>
    )
}

export default WorkDetails