import { useCallback, useEffect, useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

import NavbarItem from "./NavbarItem"
import MobileMenu from "./MobileMenu"

const TOP_OFFSET = 66

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const [showBackground, setShowBackground] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TOP_OFFSET) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((prev) => !prev)
    }, [])

    return (
        <nav className="w-full fixed z-40">
            <div
                className={`
                    px-4
                    md:px-16
                    py-6
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                    bg-opacity-90
                    justify-between
                    ${showBackground ? 'bg-zinc-950 bg-opacity-50' : ''}
                `}
            >
                <img src="/img/Logo.png" alt="logo" className="h-7 lg:h-7" />
                <div
                    className="
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex
                "
                >
                    <NavbarItem label="Home" href="/" />
                    <NavbarItem label="About" href="/about" />
                    <NavbarItem label="Skills" href="/skills"/>
                    <NavbarItem label="Projects" href="/projects" />
                    <NavbarItem label="Contact" href="/contact" />
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <AiOutlineMenu size={20} className={`text-white mr-2 transition`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar