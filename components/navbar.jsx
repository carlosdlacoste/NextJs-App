import Link from "next/link";

function Navbar() {
    return(
        <nav className="bg-slate-400 mb-4 flex justify-between items-center font-bold text-black px-20 p-3">
            <Link href='/'>
                Home
            </Link>
            <ul>
                <li>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;