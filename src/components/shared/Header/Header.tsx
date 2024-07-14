import Link from "next/link"

type Props = {}

export const Header = (props: Props) => {
    return (
        <nav className='w-full flex items-center justify-center'>
            <ul className="flex gap-8 py-8 text-xl font-medium text-secondary">
                <Link className="hover:text-mainContrast cursor-pointer transition-colors" href={"/"}>Home</Link>
                <Link className="hover:text-mainContrast cursor-pointer transition-colors" href={"/store/dj"}>Store</Link>
            </ul>
        </nav>
    )
}