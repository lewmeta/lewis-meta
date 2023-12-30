
import Image from "next/image"
import Link from "next/link"
import { GithubIcon, InstagramIcon, TwitterIcon2, TwitterXIcon } from "../Icon"
import Skills from "./Skills"
import Experiences from "./Experiences"
import Education from "./Education"
import urlFor from "@/lib/urlFor"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa"

type Props = {
    credentials: Credentials[];
    skills: Skills[];
    education: Educations[];
    experience: Experience[]
}
const Credentials = ({ credentials, skills, experience }: Props) => {
    return (
        <section className="w-full pt-20">
            {credentials.map((item, index) => (
                <div className="w-full flex flex-wrap relative" key={index}>
                    <div className="flex-grow-0 flex-shrink-0 basis-auto md:w-full lg:w-[380px] mx-auto w-full mb-[40px] lg:mb-0">
                        <div className="w-full sticky flex-none top-[18%]">
                            <div className="pt-6 pr-6 pb-9 pl-6 dark:bg-black relative bg-white rounded-3xl w-full text-center flex flex-col">
                                <div className='absolute content-[] left-0 top-0 w-full h-full bg-shadowLight rounded-3xl opacity-25 -z-10' />
                                <div className='absolute left-0 top-0 bottom-0 right-0 bg-shadowLightAfter rounded-3xl -z-10 -m-0.5' />
                                <div className="rounded-3xl mb-10 bg-shadowImageDark overflow-hidden relative">
                                    <Image src={urlFor(item.image).url()} alt='me' width={800} height={800}
                                        sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw 30vw, " priority className='object-cover w-full h-[350px] lg:h-[320px] md:h-[500px] rounded-3xl' />
                                </div>
                                <h1 className="text-ligthText dark:text-white font-medium text-[26px] mb-3">{item.name}</h1>
                                <Link href={item.link} target="_blank" className="dark:dark:text-textDark text-ligthText/70 hover:text-blueColor transition-all duration-300 ease-in dark:opacity-60 text-sm mb-6">{item.handle}</Link>
                               
                                <ul className="gap-2 flex mb-[36px] relative z-20 justify-center">
                                    {item.socials?.map((social, index) => (
                                        <li key={index} className="mr-2 w-[40px] h-[40px] flex ">
                                            <Link href={social.url} rel="noreferrer noopener" target="_blank" className={`${social.platform === "facebook" ? "!bg-blue-800" : ""} ${social.platform === "instagram" ? "!bg-[#F56040] " : ""}  ${social.platform === "linkedin" ? "!bg-blue-400" : ""} ${social.platform === "twitter" ? "hover:bg-blue-600" : "bg-blue-600"}  ${social.platform === "youtube" ? "!bg-[#c4302b]" : ""} ${social.platform === "twitch" ? "!bg-[#6441A4]" : ""} bg-yellowColor  text-white cursor-pointer w-full h-full flex items-center justify-center z-[1] rounded-full text-lg`}>
                                                {social.platform === "facebook" && <FaFacebookF className="" />}
                                                {social.platform === "instagram" && <FaInstagram />}
                                                {social.platform === "linkedin" && <FaLinkedinIn />}
                                                {social.platform === "twitter" && <TwitterXIcon />}
                                                {social.platform === "twitch" && <FaTwitch />}
                                                {social.platform === "youtube" && <FaYoutube />}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <Link href={"/contact"} className="w-full z-20 relative dark:bg-dark bg-light dark:text-white text-ligthText transition-all duration-300 rounded-2xl text-sm font-medium py-3 px-8 text-center capitalize">contact me</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow-0 flex-shrink-0 w-full basis-auto lg:w-[calc(100%-380px)] lg:pl-14 relative">
                        <div className="w-full relative">
                            <div className="pb-[84px]">
                                <h1 className="font-bold lg:text-[35px] lg:leading-[43px] text-[28px] leading-[35px] mb-12 w-full text-start dark:text-white text-black">More about <span className="text-blueColor">{item.name}</span></h1>
                                {item.bioArrays.map((bio, index) => (
                                    <p className="text-base font-light dark:text-white text-ligthText opacity-80 mb-7 " key={index}>{bio.description}</p>
                                ))}
                                {/* <p className="text-base font-light dark:text-white text-ligthText opacity-80 mb-7 ">I believe that design is about more than just making things look pretty – it&apos;s about solving problems and creating intuitive, enjoyable experiences for users.</p>
                                <p className="text-base font-light dark:text-white text-ligthText opacity-80 mb-7 ">Whether I&apos;m working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p> */}
                            </div>
                            <div className="">
                                <Experiences experience={experience} />
                            </div>
                            <div className="">
                                <Education />
                            </div>
                            <div className="">
                                <Skills skills={skills} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Credentials