"use client"

import Image from "next/image";


interface ErrorProps {
    error: Error;
    reset: () => void;
}

const Error = (props: ErrorProps) => (
    <div className='w-full flex items-center justify-center flex-col text-text mt-16 gap-6 text-center'>
        <h1 className='text-6xl from-pink-500 to-indigo-500 bg-clip-text bg-gradient-to-br text-transparent font-semibold tracking-wide'>Page Not Found</h1>
        <Image
            alt="pantalla de error"
            src={'/imgs/404.png'}
            width={500}
            height={500}
            className="w-full px-5 max-w-sm"
        />
        <p className="text-2xl font-medium tracking-wide max-w-xl">Oops! We couldn&apos;t find the page you&apos;re looking for. Let&apos;s get you back on track!</p>
    </div>
)

export default Error