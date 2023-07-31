import type { NextPage, NextPageContext } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = {
    statusCode?: number,
}

const Error: NextPage<Props> = ({ statusCode }) => {
    return (
        <>
            <Head>
                <title>Albert Qi - {statusCode ?? "Error"}</title>
                <meta property="og:title" content={`Albert Qi - ${statusCode ?? "Error"}`} />
                <meta name="description" content={`Error${statusCode ? ` ${statusCode}` : ""}`} />
            </Head>
            <div className="w-screen h-full flex-1 grid place-items-center p-8">
                <div className="text-dark text-left space-y-6">
                    <h1 className="text-8xl font-black">{statusCode ?? ":("}</h1>
                    <p className="font-light text-lg">Oops! Something went wrong.</p>
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

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
}

export default Error;