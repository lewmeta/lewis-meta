
import Image from "next/image"
import stars from "../../public/images/star.png"
import projectDt1 from "../../public/images/project/project-dt-1.jpeg"
import Layout from "../Layout"

const WorkDetails = () => {
    return (
        <section className="w-full pt-[80px]">
            <Layout className="">
                <p className="text-textDark opacity-70 mb-[40px]">BRANDING - RAVEN STUDIO</p>
                <div className="relative flex items-center gap-5 mb-[30px] text-[56px] w-auto">
                    <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," />
                    <h1 className="text-[20px] leading-[26px] lg:text-[56px] text-dark dark:text-white md:text-[40px] md:leading-[55px] lg:leading-[65px] sm:text-[30px] sm:leading-[40px] uppercase font-semibold relative flex items-start justify-start">AESTHETIC DESIGN FOR BRAND NEW STARTUP.
                    </h1>
                    <Image src={stars} alt='start-img' priority width={60} height={60} className='overflow-hidden' />
                </div>
            </Layout>
            <div className="sm:[350px] h-[250px] md:h-[400px] lg:h-[500px] w-full mb-[50px]">
                <Image src={projectDt1} sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," alt="project1" className="w-full h-full object-cover" />
            </div>
            <Layout>
                <div className="flex flex-wrap w-full relative md:p-[28] sm:p-6 p-0 lg:p-[36px] dark:bg-black bg-white rounded-3xl">
                    <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 z-10 dark:block hidden' />
                    <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10 dark:block hidden opacity-10' />
                    <div className="lg:w-1/2 w-full flex-grow-0 flex-shrink-0 basis-auto lg:pr-2 mb-[40px] lg:mb-0 ">
                        <div className="w-full relative p-[24px] z-20 rounded-3xl dark:bg-black bg-[#FBFBFC]">
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10  dark:block hidden' />
                            <h3 className="dark:text-textDark dark:opacity-50 text-lg uppercase font-medium tracking-tighter text-ligthText mb-3.5">Raven studio</h3>
                            <p className="dark:text-white dark:opacity-80 text-base mb-5 text-black opacity-40">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                            <p className="dark:text-white dark:opacity-80 text-base mb-5 text-black opacity-40">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex-grow-0 flex-shrink-0 basis-auto lg:pl-2 ">
                        <div className="w-full relative p-[24px] z-20 rounded-3xl dark:bg-black bg-[#FBFBFC]">
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10  dark:block hidden' />
                            <h3 className="dark:text-textDark dark:opacity-50 text-lg uppercase font-medium tracking-tighter text-ligthText mb-3.5">About Project</h3>
                            <p className="dark:text-white dark:opacity-80 text-base mb-5 text-black opacity-40">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                            <p className="dark:text-white dark:opacity-80 text-base mb-5 text-black opacity-40">Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                        </div>
                    </div>
                </div>
                <div className="sm:[350px] h-[250px] md:h-[400px] w-full my-[50px] mb-[30px] rounded-3xl overflow-hidden">
                    <Image src={projectDt1} sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," alt="project1" className="w-full h-full object-cover" />
                </div>
                <div className="w-full flex flex-wrap">
                    <div className="lg:w-1/2 w-full flex-grow-0 flex-shrink-0 basis-auto lg:pr-4 mb-[40px] lg:mb-0 ">
                        <div className="w-full sm:[350px] h-[250px] md:h-[400px] rounded-3xl overflow-hidden">
                            <Image src={projectDt1} sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," alt="project1" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full flex-grow-0 flex-shrink-0 basis-auto lg:pl-4 ">
                        <div className="w-full sm:[350px] h-[250px] md:h-[400px] rounded-3xl overflow-hidden">
                            <Image src={projectDt1} sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," alt="project1" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </Layout>
        </section>
    )
}

export default WorkDetails