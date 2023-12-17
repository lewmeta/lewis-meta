import React from 'react'
import Layout from '../Layout'

const Header = () => {
    return (
        <section className='w-full py-[150px] relative z-10 flex items-center'>
            <div className='absolute left-0 top-0 bg-fixed h-full w-full bg-cover bg-center -z-10 bg-no-repeat' style={{ backgroundImage: `url(/images/7.jpg)` }} />
            <div className='opacity-40 absolute top-0  left-0 w-full h-full -z-10 bg-black' />
            <Layout>
                <div className="w-full z-20"
                >
                    <h1 className='mb-[40px] lg:text-[82px] lg:leading-[92px] md:text-[62px] md:leading-[72px] sm:text-[42px] sm:leading-[52px] text-white font-semibold capitalize pb-[10px] '>Services I<span className='text-blueColor'> provide</span></h1>
                    <p className='text-2xl max-w-[600px] w-full text-white font-light'>Internet tend to repeat predefined chunks look even slightly believable If you are going to use a passage of Lorem Ipsum.</p>
                </div>
            </Layout>
        </section>
    )
}

export default Header