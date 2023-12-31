import React from 'react'
import Layout from '../Layout'
import urlFor from '@/lib/urlFor';

type Props = {
    serviceHeader: ServiceHeader[];
}
const Header = ({ serviceHeader }: Props) => {
    return (
        <>
            {serviceHeader.map((item, index) => (
                <section className='w-full py-[150px] relative z-10 flex items-center' key={index}>
                    <div className='absolute left-0 top-0 bg-fixed h-full w-full bg-cover bg-bottom -z-10 bg-no-repeat' style={{ backgroundImage: `url(${urlFor(item.image).url()})` }} />
                    <div className='opacity-60 absolute top-0  left-0 w-full h-full -z-10 bg-black' />
                    <Layout>
                        <div className="w-full z-20"
                        >
                            <h1 className='mb-[20px] text-[42px] sm:leading-[52px] text-white font-semibold capitalize pb-[0px] '>{item.title}</h1>
                            <p className='text-xl max-w-[600px] w-full text-white font-light'>{item.description}</p>
                        </div>
                    </Layout>
                </section>
            ))}
        </>
    )
}

export default Header