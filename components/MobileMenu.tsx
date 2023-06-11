import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import NavbarItem from "./NavbarItem";

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-zinc-950 z-50">
            <div className="absolute top-2 right-1 p-4">
                <button className="text-white">
                    <AiOutlineClose size={24} />
                </button>
            </div>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="flex flex-col items-center gap-7">
                    <NavbarItem label="Home" href="/" />
                    <NavbarItem label="About" href="/about" />
                    <NavbarItem label="Skills" href="/skills" />
                    <NavbarItem label="projects" href="/projects" />
                    <NavbarItem label="Contact" href="/contact" />
                </div>
            </div>
        </div>
    )
}

export default MobileMenu;