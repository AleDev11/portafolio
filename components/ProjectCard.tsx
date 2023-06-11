import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { BsInfoCircle } from 'react-icons/bs';

import useInfoModal from '@/hooks/useInfoModalStore';

interface ProjectCardProps {
    data: Record<string, any>;
}

const ProjectCard = ({ data }: ProjectCardProps) => {
    const router = useRouter();
    const { openModal } = useInfoModal();

    const redirectToProject = useCallback(() => router.push(`/project/${data.id}`), [router, data.id]);

    return (
        <div className="group bg-zinc-800 col-span relative h-[12vw] rounded-md flex items-center">
            {!!data.thumbnailUrl && (
                <img
                onClick={redirectToProject}
                src={data.thumbnailUrl}
                alt="Movie"
                draggable={false}
                className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw] sm:h-[20vw] md:h-[16vw] lg:h-[12vw] xl:h-[12vw]"
            />
            ) || (
                <div className="bg-zinc-700 w-full h-[12vw] sm:h-[20vw] md:h-[16vw] lg:h-[12vw] xl:h-[12vw]">
                    <div className="flex items-center justify-center w-full h-full">
                        <p className="text-white text-4xl">{data.title}</p>
                    </div>
                </div>
            )}
            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-100 group-hover:-translate-y-[6vw] group-hover:opacity-100">
                {!!data.thumbnailUrl && (
                    <img
                        onClick={redirectToProject}
                        src={data.thumbnailUrl}
                        alt="Movie"
                        draggable={false}
                        className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw] sm:h-[20vw] md:h-[16vw] lg:h-[12vw] xl:h-[12vw]"
                    />
                ) || (
                    <div className="bg-zinc-700 w-full h-[12vw] sm:h-[20vw] md:h-[16vw] lg:h-[12vw] xl:h-[12vw]">
                        <div className="flex items-center justify-center w-full h-full">
                            <p className="text-white text-2xl font-bold">{data.title}</p>
                        </div>
                    </div>
                )}
                <div className="z-10 bg-zinc-700 p-2 lg:p-4 rounded-md">
                    <h3 className="text-white text-lg font-bold mb-2">{data.title}</h3>
                    <p className="text-gray-400 text-sm">{data.description}</p>
                    <button
                        onClick={redirectToProject}
                        className='
                            bg-white
                            text-white
                            bg-opacity-30
                            rounded-md
                            py-1 md:py-2
                            px-2 md:px-4
                            w-auto
                            text-xs lg:text-lg
                            font-semibold
                            flex
                            flex-row
                            items-center
                            hover:bg-opacity-20
                            transition
                            mt-2
                            md:mt-4
                        '>
                        <BsInfoCircle className='mr-1' />
                        More Info
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;