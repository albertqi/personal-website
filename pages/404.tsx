import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Error404: NextPage = () => {
    return (
        <>
            <Head>
                <title>Albert Qi - 404</title>
                <meta property="og:title" content="Albert Qi - 404" />
                <meta name="description" content="Error 404" />
            </Head>
            <div className="absolute w-screen h-screen left-0 top-0 grid place-items-center -z-10">
                <div className="text-dark text-left space-y-6">
                    <div className="space-y-1">
                        <h1 className="text-8xl font-black">404</h1>
                        <h2 className="w-fit bg-primary/20 text-primary text-lg font-medium px-2.5 py-1 rounded-lg">Page not found</h2>
                    </div>
                    <p className="font-light text-lg">Oops! We can&apos;t seem to find the page you are looking for.</p>
                    <Link href="/">
                        <a className="space-x-4 inline-flex items-center text-xl text-dark">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                            <span>Back to Home</span>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Error404;