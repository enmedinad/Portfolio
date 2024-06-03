"use client"

import Image from "next/image"
import Link from "next/link"

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string,
        image: string,
        urlGithub: string,
        urlLive: string
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
    const {data} = props
    const {id, title, image, urlLive, urlGithub} = data
    return (
        <div className="p-4 border border-teal-50 rounded-xl">  
            <h3 className="mb-4 text-xl">
                {title}
            </h3>
            <Image src={image} alt="Image Product" width={200} height={200}
            className="w-full md:w-[200px] rounded-2xl h-auto" />
            <div className="flex gap-5 mt-5">

                {urlLive !== "false" && (
                    <Link href={urlLive} className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80">
                        Visualizar
                    </Link>
                )}



                {urlGithub !== "false" && (
                    <Link href={urlGithub} className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80">
                        Github
                    </Link>
                )}
            </div>
        </div>
    )
}

export default PortfolioBox;