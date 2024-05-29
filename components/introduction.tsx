"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import Link from "next/link"

const Introduction = () => {
    return(
        <div className="z-20 w-full bg-dark/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/home-4.png" priority width="800" height="800" alt="profile pic" />

                <div className="flex flex-col jusitfy-center">
                    <h2 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo, <br/>
                    <TypeAnimation sequence={[
                        "Puedes programarlo", 1000,
                        "Puedes optimizarlo", 1000,
                        "Puedes implementarlo", 1000,
                        "Puedes desarrollarlo", 1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-secondary"
                    />
                    </h2>

                    <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 md:w-[600px]">
                    Como desarrollador React, fusiono optimización y funcionalidad para crear interfaces impactantes y accesibles, garantizando una experiencia de usuario fluida y eficiente.
                    </p>

                    <div className="flex item-center justify-center gap-3 md:justify-start md:gap-10">
                        <Link href="/projects" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver Proyectos
                        </Link>
                        <Link href="/contact" className="px-3 text-secondary border-secondary py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/50">
                            Contactame
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction


/* 1:04:20 */