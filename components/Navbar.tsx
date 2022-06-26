import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white px-36 py-6 text-right space-x-12 shadow-md w-screen">
            <Link href="/">
                <a className="lowercase text-primary hover:text-primary-shade bg-transparent">Home</a>
            </Link>
            <Link href="/resume">
                <a className="lowercase text-primary hover:text-primary-shade bg-transparent">Resume</a>
            </Link>
        </nav>
    );
}

export default Navbar;