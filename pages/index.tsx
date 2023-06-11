import { useRouter } from "next/router"
import { FiArrowDown } from "react-icons/fi"

import Button from "@/components/Button";

export default function Home() {
    const router = useRouter()

    return (
        <>
            <div className="flex flex-col items-center justify-center relative h-full">
                <div className="flex flex-col items-center justify-center bg-zinc-900 rounded-2xl shadow-md shadow-current w-80 h-80">
                    <div className="bg-center bg-cover">
                        <img
                            className="h-32 w-32 rounded-full border-2 border-white mb-4 transition duration-500 shadow-xl shadow-current lg:w-40 lg:h-40"
                            src="/img/Photo.png"
                            alt="logo"
                        />
                    </div>
                    <h1 className="text-2xl font-bold text-white mt-2 lg:text-2xl">Alejandro Font Muñiz</h1>
                    <h2 className="text-xl font-semibold text-white mt-2 lg:text-xl">Software Developer</h2>
                </div>
                <div className="flex flex-row items-center justify-center mt-10 animate-bounce">
                    <FiArrowDown size={50} className="text-white" />
                </div>
                <div>
                    <Button label="About Me" onClick={() => router.push("/about")} />
                </div>
            </div>
        </>
    )
}