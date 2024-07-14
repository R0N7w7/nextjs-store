"use client"

import Image from "next/image";
import { IoReload } from "react-icons/io5";


interface ErrorProps {
    error: Error;
    reset: () => void;
}

const Error = (props: ErrorProps) => (
    <div className='w-full flex items-center justify-center flex-col text-text mt-16 gap-6 text-center'>
        <h1 className='text-6xl from-pink-500 to-indigo-500 bg-clip-text bg-gradient-to-br text-transparent font-semibold tracking-wide'>An error has ocurred!</h1>
        <Image
            alt="pantalla de error"
            src={'/imgs/error.png'}
            width={500}
            height={500}
            className="w-full px-5 max-w-sm"
        />
        <p className="text-2xl font-medium tracking-wide">Oops! Something went wrong. We&apos;re on it!</p>
        <button className="from-pink-500 to-indigo-500 bg-gradient-to-r px-5 py-1 text-xl rounded-md font-medium flex items-center justify-center gap-2 hover:scale-105 transition-all" onClick={props.reset}><IoReload className="size-6"/> Reload</button>
    </div>
)

export default Error