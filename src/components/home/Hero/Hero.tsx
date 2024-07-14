
type Props = {}

export const Hero = (props: Props) => {
    return (
        <section className='w-full py-10 flex flex-col items-center justify-center gap-8 sm:gap-4 px-5'>
            <h1 className="text-8xl font-bold from-pink-500 to-indigo-500 text-transparent bg-clip-text bg-gradient-to-r tracking-wide">Future World</h1>
            <h2 className="text-3xl font-extrabold text-text">Empowering Your Tomorrow, Today!</h2>
        </section>
    )
}