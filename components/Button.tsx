import React from "react";

interface ButtonProps {
    label: string;
    size?: "small" | "medium" | "large";
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, size, onClick }) => {
    if (!size) size = "medium";

    return (
        <button
            onClick={onClick}
            className={`
                ${size === "small" ? "px-2 py-1 text-sm" : ""}
                ${size === "medium" ? "px-4 py-2 text-md" : ""}
                ${size === "large" ? "px-6 py-3 text-lg" : ""}
                bg-zinc-900
                text-white
                rounded-md
                shadow-md
                shadow-current
                transition
                duration-500
                hover:bg-zinc-800
                hover:shadow-lg
                hover:shadow-current
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-zinc-900
                focus:ring-opacity-50
                active:bg-zinc-900
                active:shadow-none
                active:shadow-current
                active:ring-2
                active:ring-offset-2
                active:ring-zinc-900
                active:ring-opacity-50
            `}
        >
            {label}
        </button>
    )
}

export default Button;