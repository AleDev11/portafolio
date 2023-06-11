import { useRouter } from 'next/router'

import Swal from 'sweetalert2'

import { MdAlternateEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
    const router = useRouter()

    const redirectToGithub = () => window.open('https://github.com/AleDev11')
    const redirectToLinkedin = () => window.open('https://www.linkedin.com/in/alejandro-font-muñiz/')
    const copiarAlPortapapeles = () => {
        navigator.clipboard.writeText('')
        navigator.clipboard.writeText('fontalejandro0@gmail.com')
        Swal.fire(
            'Copying to clipboard',
            "fontalejandro0@gmail.com",
            'success'
        )
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-white lg:text-6xl mb-10">Contact</h1>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-y-10 lg:gap-x-10">
                <button onClick={redirectToGithub} className="flex flex-col items-center justify-center bg-zinc-900 rounded-2xl shadow-md shadow-current w-40 h-40 hover:shadow-lg hover:shadow-current transition hover:scale-105">
                    <div className="bg-center bg-cover border border-white p-4 rounded-2xl">
                        <FaGithub className="text-4xl text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-white mt-2">GitHub</h1>
                </button>
                <button onClick={copiarAlPortapapeles} className="flex flex-col items-center justify-center cursor-pointer bg-zinc-900 rounded-2xl shadow-md shadow-current w-40 h-40 hover:shadow-lg hover:shadow-current transition hover:scale-105">
                    <div className="bg-center bg-cover border border-white p-4 rounded-2xl">
                        <MdAlternateEmail className="text-4xl text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-white mt-2">Email</h1>
                </button>
                <button onClick={redirectToLinkedin} className="flex flex-col items-center justify-center bg-zinc-900 rounded-2xl shadow-md shadow-current w-40 h-40 hover:shadow-lg hover:shadow-current transition hover:scale-105">
                    <div className="bg-center bg-cover border border-white p-4 rounded-2xl">
                        <FaLinkedin className="text-4xl text-white" />
                    </div>
                    <h1 className="text-xl font-bold text-white mt-2">Linkedin</h1>
                </button>
            </div>
        </div>
    )
}

export default Contact