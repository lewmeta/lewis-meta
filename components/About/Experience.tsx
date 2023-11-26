import React from 'react'

const Experience = () => {
    return (
        <section className='w-full h-full pt-8'>
            <div className="w-full flex flex-wrap ">
                <div className="w-full lg:w-1/2 flex-grow-0 flex-shrink-0 basis-auto mb-8 lg:mb-0 lg:pr-4">
                    <div className="w-full flex items-start flex-wrap relative h-full">
                        <div className="w-full relative p-6 rounded-3xl h-full group bg-white dark:bg-black ">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-30' />
                            <h1 className='text-base font-medium uppercase text-ligthText mb-6  dark:text-white'>
                                EXPERIENCE
                            </h1>
                            <ul className="z-20 relative">
                                <li className="">
                                    <p className="text-primaryText opacity-60 text-base font-medium mb-3">2007 - 2017</p>
                                    <h1 className='text-lg dark:text-white text-ligthText mb-3 opacity-90'>Framer Designer &amp; Developer</h1>
                                    <p className="text-primaryText opacity-60 text-sm font-medium">Bluebase Designs</p>

                                </li>
                                <li className="">
                                    <p className="text-primaryText opacity-60 text-base font-medium mb-3">2007 - 2017</p>
                                    <h1 className='text-lg dark:text-white text-ligthText mb-3 opacity-90'>Front - End Developer</h1>
                                    <p className="text-primaryText opacity-60 text-sm font-medium">Bluebase Designs</p>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex-grow-0 flex-shrink-0 basis-auto lg:pl-4">
                    <div className="w-full flex items-start flex-wrap relative h-full">
                        <div className="w-full relative p-6 rounded-3xl h-full group bg-white dark:bg-black ">
                            <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25' />
                            <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-30 -m-0.5 opacity-30' />
                            <h1 className='text-base font-medium uppercase text-ligthText mb-6  dark:text-white'>
                                education
                            </h1>
                            <ul className="z-20 relative">
                                <li className="">
                                    <p className="text-primaryText opacity-60 text-base font-medium mb-3">2007 - 2017</p>
                                    <h1 className='text-lg dark:text-white text-ligthText mb-3 opacity-90'>Framer Designer &amp; Developer</h1>
                                    <p className="text-primaryText opacity-60 text-sm font-medium">Bluebase Designs</p>

                                </li>
                                <li className="">
                                    <p className="text-primaryText opacity-60 text-base font-medium mb-3">2007 - 2017</p>
                                    <h1 className='text-lg dark:text-white text-ligthText mb-3 opacity-90'>Front - End Developer</h1>
                                    <p className="text-primaryText opacity-60 text-sm font-medium">Bluebase Designs</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience