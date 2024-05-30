import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20">
                <div className="max-w-[450px] mt-20">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl mb-5">
                        Mis {" "}

                        <span className="font-bold text-secondary">
                            Servicios.
                        </span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Ofrezco servicios de desarrollo web frontend especializados en la creacion de sitios web y 
                        aplicaciones atractivas y funcionales.<br />
                        Utilizando siempre las últimas tecnologias, como React, TypeScript, Javacript y Tailwind.
                    </p>
                    <Link href="/contact" className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
                        Contacta Conmigo
                    </Link>
                </div>

                

                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    )
}

export default ServicesPage;