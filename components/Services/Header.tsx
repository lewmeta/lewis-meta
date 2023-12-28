import React from 'react'
import Layout from '../Layout'

const Header = () => {
    return (
        <section className='w-full py-[90px] relative z-10 flex items-center'>
            <div className='absolute left-0 top-0 bg-fixed h-full w-full bg-cover bg-bottom -z-10 bg-no-repeat' style={{ backgroundImage: `url(/images/7.jpg)` }} />
            <div className='opacity-60 absolute top-0  left-0 w-full h-full -z-10 bg-black' />
            <Layout>
                <div className="w-full z-20"
                >
                    <h1 className='mb-[20px] text-[42px] sm:leading-[52px] text-white font-semibold capitalize pb-[0px] '>Services I<span className='text-blueColor'> provide</span></h1>
                    <p className='text-xl max-w-[600px] w-full text-white font-light'>Internet tend to repeat predefined chunks look even slightly believable If you are going to use a passage of Lorem Ipsum.</p>
                </div>
            </Layout>
        </section>
    )
}

export default Header