import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-white px-8 lg:px-12 xl:px-36 py-6 text-right space-x-4 sm:space-x-8 lg:space-x-12 shadow-md w-screen">
            <Link href="/">
                <a className="lowercase text-primary hover:text-primary-shade bg-transparent">Home</a>
            </Link>
            <Link href="/about-me">
                <a className="lowercase text-primary hover:text-primary-shade bg-transparent">About Me</a>
            </Link>
            <Link href="/projects">
                <a className="lowercase text-primary hover:text-primary-shade bg-transparent">Projects</a>
            </Link>
            <Link href="/resume">
                <a className="lowercase text-primary hover:text-primary-shade bg-transparent">Resume</a>
            </Link>
        </nav>
    );
}

export default Navbar;