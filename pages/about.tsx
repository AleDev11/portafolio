import { useRouter } from "next/router"
import { FiArrowDown } from "react-icons/fi"

import Button from "@/components/Button"

const About = () => {
    const router = useRouter()

    return (
        <div className="flex flex-col items-center min-h-screen py-36 lg:py-72">
            <h1 className="text-4xl font-bold text-white mt-2 lg:text-4xl">About Me</h1>
            <div className="text-center w-1/2 mt-4">
                <p className="text-sm font-semibold text-white mt-2 lg:text-xl">
                    I'm Alejandro Font, a programmer passionate about technology and software development. With experience in multiple languages, I enjoy creating innovative and efficient solutions. My focus is on cross-platform application development and the creation of interactive applications that provide an exceptional user experience. I am constantly looking for new challenges and opportunities to expand my knowledge and skills in the programming field.
                </p>
            </div>
            <div className="flex flex-row items-center justify-center mt-10 animate-bounce">
                <FiArrowDown size={50} className="text-white" />
            </div>
            <Button label="Skills" onClick={() => router.push("/skills")} />
        </div>
    )
}

export default About