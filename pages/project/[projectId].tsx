import React from "react";
import { useRouter } from "next/router";

import { FaGithub } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

import useProject from "@/hooks/useProject";

const Project = () => {
    const router = useRouter();
    const { projectId } = router.query;
    const { data } = useProject(typeof projectId === 'string' ? parseInt(projectId, 10) : undefined);

    if (!data) return null;

    const redirectToGithub = () => window.open(data?.github);
    const redirectToLink = () => window.open(data?.link);

    return (
        <div className="flex flex-col items-center min-h-screen py-32">
            <h1 className="text-4xl font-bold text-white mb-10 lg:text-6xl">{data?.title}</h1>
            <div className="flex flex-col w-10/12 h-full">
                <h1 className="text-2xl font-bold text-white mb-10 lg:text-4xl">Description</h1>
                <p className="text-white text-start text-2xl ">{data?.description}</p>
            </div>
            {!!data?.thumbnailUrl && (
                <div className="flex flex-col w-10/12 h-full py-10">
                    <h1 className="text-2xl font-bold text-white mb-10 lg:text-4xl">Images</h1>
                    <img src={data?.thumbnailUrl} alt={data?.title} className="w-full h-full object-cover" />
                </div>
            )}
            {!!data?.video && (
                <div className="flex flex-col w-10/12 h-full py-10">
                    <h1 className="text-2xl font-bold text-white mb-10 lg:text-4xl">Video</h1>
                    <iframe id="ytplayer" width="100%" height="800" src={'http://www.youtube.com/embed/' + data?.video + '?autoplay=1'} className="border-none" />
                </div>
            )}
            <div className="flex flex-col w-10/12 h-full items-center justify-center py-10">
                <h1 className="text-2xl font-bold text-white mb-10 lg:text-4xl">Links</h1>
                <div className={`grid grid-cols-1 gap-4 ${data?.link_demo ? "lg:grid-cols-2" : ""}`}>
                    <button onClick={redirectToGithub} className="flex flex-col items-center justify-center bg-zinc-900 rounded-2xl shadow-md shadow-current w-40 h-40 hover:shadow-lg hover:shadow-current transition hover:scale-105">
                        <div className="bg-center bg-cover border border-white p-4 rounded-2xl">
                            <FaGithub className="text-4xl text-white" />
                        </div>
                        <h1 className="text-xl font-bold text-white mt-2">GitHub</h1>
                    </button>
                    {!!data?.link_demo && (
                        <button onClick={redirectToGithub} className="flex flex-col items-center justify-center bg-zinc-900 rounded-2xl shadow-md shadow-current w-40 h-40 hover:shadow-lg hover:shadow-current transition hover:scale-105">
                            <div className="bg-center bg-cover border border-white p-4 rounded-2xl">
                                <AiOutlineLink className="text-4xl text-white" />
                            </div>
                            <h1 className="text-xl font-bold text-white mt-2">Demo</h1>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;