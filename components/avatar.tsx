"use client"
import MotionTransition from "./transition-component"
import Image from "next/image"

const Avatar = () => {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src="/avatar-1.png" width={650} height={650} className="w-full h-full md:w-[350px] lg:w-[450px] xl:w-[650px]" alt="Avatar" />
        </MotionTransition>
    );
}

export default Avatar;