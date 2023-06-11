import React from 'react'

import useProjectsList from '@/hooks/useProjectsList';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/Button';

const Projects = () => {
    const { data } = useProjectsList()

    return (
        <div className="flex flex-col items-center min-h-screen py-32 ">
            <h1 className="text-4xl font-bold text-white mb-10 lg:text-6xl">Projects</h1>
            <div className="grid grid-cols-1 gap-4 sm:gap-20 md:gap-20 lg:grid-cols-3 lg:gap-y-10 lg:gap-x-10">
                {data?.map((project: any) => (
                    <ProjectCard key={project.id} data={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects