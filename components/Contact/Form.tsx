"use client"
import React, { useRef } from 'react'
import { BiMessageAltDetail } from 'react-icons/bi'
import { FaEnvelope, FaInstagram, FaUserPlus } from 'react-icons/fa'
import { TwitterXIcon } from '../Icon'
import Link from 'next/link'

interface FormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Form = () => {

    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const subjectRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);

    async function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
      
        // Getting the values from their useRef hooks
        let name: string, email: string, subject:string, message: string;

        name = nameRef.current!.value;
        email = emailRef.current!.value;
        subject = subjectRef.current!.value;
        message = messageRef.current!.value;      
        // Some form validation
        if (!name || !email || !subject || !message) {
          alert("Failed: Ensure to fill all form inputs");
          return;
        }
      
        // Clear the form inputs after submit
        nameRef.current!.value = '';
        emailRef.current!.value = '';
        messageRef.current!.value = '';
        subjectRef.current!.value = ''; 

        // TODO: Send the form values to an API route
        const formValues: FormValues = { name, email, message, subject };
        let result;
        try {
          const data = await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(formValues),
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });
          result = await data.json();
        } catch (error:any) {
          result = { message: `Failed: ${error.message}` };
        }
        alert(result.message); // Gives the user some sort of feedback after the form has been processed
      }

    return (
        <section className='w-full relative flex flex-wrap justify-between'>
            <div className="dark:bg-black bg-transparent py-[30px] px-[20px] lg:px-[30px] relative overflow-hidden mt-[30px] rounded-lg z-10 border border-black/[0.09] dark:border-white/[0.09] lg:max-w-[65.667%] max-w-[950px] w-full lg:order-1 order-2 ">
                <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight -z-10 opacity-[0.1] dark:block hidden' />
                <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter dark:block hidden -z-10 opacity-20' />
                <div className="w-full mb-[40px] z-20">
                    <h1 className='md:text-[26px] md:leading-[35px] text-[22px] leading-[30px] dark:text-white text-black capitalize font-medium '>Get in Touch <span className="text-blueColor">With My Studio</span> </h1>
                    <h2 className='text-base max-w-[750px] w-full pt-[30px] pb-[20px] border-b border-b-black/[0.09] font-light dark:border-b-white/[0.09] relative flex items-center'>
                        <span className='absolute content-[] right-0 w-[6px] h-[6px] rounded-full bg-blueColor top-full mt-[-3px]' />
                        Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised .</h2>
                </div>
                <form action="" onSubmit={submitForm} className="max-w-[750px] w-full">
                    <div className="w-full  relative pl-[50px] lg:pl-[70px] ">
                        <div className="absolute left-0 top-0 text-white bg-blueColor text-lg w-[50px] lg:w-[70px] h-[50px] rounded-sm flex items-center justify-center">
                            <FaUserPlus />
                        </div>
                        <input 
                        type='text' 
                        required
                        placeholder='Name'
                        ref={nameRef}
                        className='dark:bg-black bg-white  dark:text-white text-black dark:placeholder:text-white placeholder:text-black text-sm h-[51px] w-full pl-[20px] border border-black/[0.09] dark:border-white/[0.09] rounded-sm outline-none' />
                    </div>
                    <div className="w-full mt-4 relative pl-[50px] lg:pl-[70px] ">
                        <div className="absolute left-0 top-0 text-white bg-blueColor text-lg w-[50px] lg:w-[70px] h-[50px] rounded-sm flex items-center justify-center">
                            <FaEnvelope />
                        </div>
                        <input 
                        type='email' 
                        required 
                        placeholder='Email'
                        ref={emailRef}
                        className='dark:bg-black  bg-white dark:text-white text-black dark:placeholder:text-white placeholder:text-black text-sm h-[51px] w-full pl-[20px] border border-black/[0.09] dark:border-white/[0.09] rounded-sm outline-none'  />
                    </div>
                    <div className="w-full mt-4 relative pl-[50px] lg:pl-[70px] ">
                        <div className="absolute left-0 top-0 text-white bg-blueColor text-lg w-[50px] lg:w-[70px] h-[50px] rounded-sm flex items-center justify-center">
                            <BiMessageAltDetail />
                        </div>
                        <input 
                        type='text'
                        ref={subjectRef} 
                        placeholder='Subject'
                        required className='dark:bg-black  bg-white dark:text-white text-black dark:placeholder:text-white placeholder:text-black text-sm h-[51px] w-full pl-[20px] border border-black/[0.09] dark:border-white/[0.09] rounded-sm outline-none'  />
                    </div>
                    <div className="w-full mt-7 relative">
                        <textarea 
                        required
                        ref={messageRef}
                        placeholder='Your message'
                        className='dark:bg-black  bg-white dark:text-white text-black dark:placeholder:text-white placeholder:text-black text-sm h-[170px] w-full px-[20px] py-[30px] border resize-none border-black/[0.09] dark:border-white/[0.09] rounded-sm outline-none'  />
                    </div>
                    <div className="w-full mt-[30px]">
                        <button className="text-white bg-blueColor rounded-sm max-w-full overflow-hidden font-semibold py-[13px] px-[16px] uppercase text-xs" type="submit">send message</button>
                    </div>
                </form>
            </div>
            <div className="lg:max-w-[33.33%] w-full lg:mb-0 mb-[30px] py-[30px] lg:order-2 order-1 lg:pl-[30px]">
                <div className="w-full relative flex flex-col dark:bg-black bg-transparent py-[30px] px-[20px] lg:px-[30px] overflow-hidden rounded-lg z-10 border border-black/[0.09] dark:border-white/[0.09] mt-0  ">
                    <p className="uppercase dark:text-white text-black font-semibold mb-5">Social media</p>
                    <div className="w-full flex flex-col gap-3">
                        <div className="w-auto relative transition-all duration-300 ease-in-out rounded-lg flex items-center">
                            <div className="w-[50px] h-[50px] rounded-sm text-base font-semibold transition-all duration-200 ease-in-out bg-blueColor text-white flex items-center justify-center ">
                                <Link href={"https://instagram"} target='_blank'>
                                    <FaInstagram className="text-2xl" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-auto relative transition-all duration-300 ease-in-out rounded-lg flex items-center">
                            <div className="w-[50px] h-[50px] rounded-sm text-base font-semibold transition-all duration-200 ease-in-out bg-blueColor  hover:text-black text-white flex items-center justify-center ">
                                <Link href={""}>
                                    <TwitterXIcon className="text-2xl" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form