import Link from "next/link"
import Image from "next/image"
import stars from "../../public/images/star.png"
import project_1 from "@/public/images/project/project1.jpeg"

const Blog = () => {
    return (
        <section className="w-full">
            <div className="w-full dark:text-textDark dark:opacity-70 text-ligthText/90 mb-6 flex items-center">
                <Link href={"/"} className="uppercase opacity-100">Home</Link>
                <p className="pl-3">- My published articles</p>
            </div>
            <h1 className="lg:text-[56px] lg:leading-[70px] md:text-[46px] md:leading-[60px] sm:text-[35px] sm:leading-[45px] text-[28px] leading-[35px] relative mb-7 font-semibold gap-6 dark:text-white text-ligthText flex items-center">
                <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," />
                Unsatiable entreaties may collecting Power.
                <Image src={stars} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," className="flex justify-start" />
            </h1>
            <div className="flex flex-wrap w-full mt-10">
                <div className="lg:w-1/2 w-full lg:pr-6 mb-10 lg:mb-0">
                    <div className="w-full h-[400px] rounded-3xl overflow-hidden relative">
                        <Link href={"/blog/blog-details/1"} className="absolute top-0 left-0 w-full h-full" />
                        <Image src={project_1} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," className="w-full h-full object-cover" />
                    </div>
                </div>
                <div className="lg:w-1/2 w-full lg:pr-6">
                    <div className="w-full h-[400px] rounded-3xl overflow-hidden relative">
                        <Link href={"/blog/blog-details/1"} className="absolute top-0 left-0 w-full h-full" />
                        <Image src={project_1} alt='start-img' priority sizes="(max-width: 768px) 60vw, (max-width:1200px) 50vw 50vw," className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog