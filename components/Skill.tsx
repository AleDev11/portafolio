import React from "react";

interface SkinProps {
    label: string;
    icon: any;
}

const Skill: React.FC<SkinProps> = ({ label, icon }) => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-zinc-900 rounded-2xl shadow-md shadow-current w-40 h-40 hover:shadow-lg hover:shadow-current transition hover:scale-105">
                <div className="bg-center bg-cover border border-white p-4 rounded-2xl">
                    {icon}
                </div>
                <h1 className="text-xl font-bold text-white mt-2">{label}</h1>
            </div>
        </div>
    )
}

export default Skill;