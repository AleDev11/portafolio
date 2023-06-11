import { useRouter } from "next/router"

import { SiMysql, SiPython, SiJavascript, SiTypescript, SiHtml5, SiTailwindcss, SiCplusplus, SiLua, SiNextdotjs } from "react-icons/si"
import { TbBrandCSharp } from "react-icons/tb"
import { BsFiletypeJava, BsUnity, BsFiletypeCss } from "react-icons/bs"
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa"
import { CgScrollV } from "react-icons/cg"

import Skill from "@/components/Skill"

const Skills = () => {
    const router = useRouter()

    return (
        <>
            <div className="flex flex-col items-center justify-center relative h-full">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-bold text-white mt-2 lg:text-4xl">Skills</h1>
                    <div className="text-center w-1/2 mt-4">
                        <p className="text-xl font-semibold text-white mt-2 lg:text-xl">
                            I have experience in multiple languages and frameworks. I am constantly learning new technologies and improving my skills.
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center mt-10 animate-bounce">
                    <CgScrollV size={50} className="text-white" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center relative h-full">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 auto-rows-min lg:grid-cols-4">
                    <Skill icon={<SiMysql size={50} className="text-white" />} label="MySQL" />
                    <Skill icon={<TbBrandCSharp size={50} className="text-white" />} label="JavaScript" />
                    <Skill icon={<SiPython size={50} className="text-white" />} label="Python" />
                    <Skill icon={<SiJavascript size={50} className="text-white" />} label="JavaScript" />
                    <Skill icon={<SiTypescript size={50} className="text-white" />} label="TypeScript" />
                    <Skill icon={<SiHtml5 size={50} className="text-white" />} label="HTML5" />
                    <Skill icon={<SiTailwindcss size={50} className="text-white" />} label="Tailwind CSS" />
                    <Skill icon={<BsFiletypeCss size={50} className="text-white" />} label="CSS" />
                    <Skill icon={<SiCplusplus size={50} className="text-white" />} label="C++" />
                    <Skill icon={<BsFiletypeJava size={50} className="text-white" />} label="Java" />
                    <Skill icon={<SiLua size={50} className="text-white" />} label="Lua" />
                    <Skill icon={<FaReact size={50} className="text-white" />} label="React" />
                    <Skill icon={<FaNodeJs size={50} className="text-white" />} label="Node.js" />
                    <Skill icon={<SiNextdotjs size={50} className="text-white" />} label="Next.js" />
                    <Skill icon={<BsUnity size={50} className="text-white" />} label="Unity" />
                    <Skill icon={<FaGitAlt size={50} className="text-white" />} label="Git" />
                </div>
            </div>
        </>
    )
}

export default Skills