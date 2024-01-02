import Image from 'next/image'
import Link from 'next/link'
import urlFor from '@/lib/urlFor';
import { BiSolidQuoteAltLeft } from 'react-icons/bi';


export const RichTextComponent = {
    types: {
        image: ({value}: any) =>{
            return (
                
                <div className="relative w-full h-full m-10 mx-auto">
                    <Image  
                        className='object-cover  w-full h-[400px]'

                        src={urlFor(value).url()}
                        alt="Blog Post Image"
                        width={800}
                        height={600}
                    />
                </div>
          
            );
        },
        video: ({ value }: any) => {
            return (
                <div className="relative w-full h-96 m-10 mx-auto">
                    <video
                        controls
                        className='object-cover rounded-tl-lg rounded-tr-lg'
                        src={value.url} // Assuming the URL of the video is provided in the "value" object
                        // alt="Video"
                        width={800}
                        height={600}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            );
        },
    },

    list: {
        bullet: ({children}: any) => (
          <ul className='text-dark dark:text-textDark tracking-[0.0025em] relative font-normal text-base list-decimal'>
           {children}
        </ul>
        ),
        number:({children}: any) => (
          <ol className='text-dark dark:text-textDark tracking-[0.0025em] relative font-normal text-base list-decimal'>{children}</ol>
        ),
    
    },
    block: {
        normal:({children}: any) => (
            <p className="leading-[32px] pt-[10px] pb-[11px] text-[16px] text-primaryText dark:text-textDark font-[400] ">{children}</p>
        ),

        h1:({children}: any) => (
            <h1 className="text-5xl py-10 font-normal">{children}</h1>
        ),
        h2:({children}: any) => (
            <h2 className='text-lg md:text-[25px] dark:text-blueColor text-black py-10 font-bold'>{children}</h2>
        ),
        h3:({children}: any) => (
            <h3 className='text-3xl py-10 font-normal'>{children}</h3>
        ),
        h4:({children}: any) => (
            <h4 className='text-2xl py-10 font-normal'>{children}</h4>
        ),

        blockquote:({children}: any) => (
            <>
            <blockquote className="relative z-[1] border-none text-[20px] mt-[0px] text-[#2222] font-semibold bg-yellowColor  px-6 py-6">
                <p className='m-0 relative z-[1] text-4 italic font-semibold text-white p-[50px]'>{children}</p>
                <div className='absolute right-[50px] content-[] text-white bottom-[50px] font-semibold opacity-[0.1] text-[80px]'>
                    <BiSolidQuoteAltLeft/>
                </div>
            </blockquote>
            </>
        ),
    },
    marks:{
        link: ({children, value}: any) => {
            const rel = !value.href.startsWith("/")
            ? "noreferrer noopener"
            : undefined;

            return (
                <Link 
                    href={value.href}
                    rel={rel}
                    className="underline decoration-[#f7ab0a] hover:decoration-black"
                >
                    {children}
                </Link>
            )
        }
    }
}