import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import profilePicture from "../../public/albertqi512.jpg";

const AboutMe: NextPage = () => {
    return (
        <>
            <Head>
                <title>Albert Qi - About Me</title>
                <meta property="og:title" content="Albert Qi - About Me" />
                <meta name="description" content="Learn more about who I am!" />
            </Head>
            <div className="w-screen h-full flex-1 grid lg:grid-cols-3">
                <div className="hidden lg:col-span-1 bg-primary lg:flex items-center justify-center">
                    <div className="w-1/2 rounded-full overflow-hidden outline outline-1.5 outline-white flex items-center justify-center">
                        <Image
                            src={profilePicture}
                            alt="Picture of Albert Qi"
                            priority={true}
                            placeholder="blur"
                        />
                    </div>
                </div>
                <div className="lg:col-span-2 flex items-center justify-center">
                    <div className="space-y-8 text-dark font-light text-justify sm:w-5/6 p-8">
                        <p className="text-2xl text-center xl:text-justify">
                            Hi, I&apos;m Albert! I&apos;m originally from <span className="font-medium">Needham, Massachusetts</span>, and I studied <span className="font-medium">computer science and statistics at Harvard</span>.
                        </p>
                        <div className="space-y-4">
                            <p>
                                My passion for computer science began in sixth grade, when my middle school&apos;s Scratch club first introduced me to programming. I went on to earn my master&apos;s in computer science from Harvard in 2025, and I now work full-time as a software engineer, focusing mainly on mobile development. I love building things and seeing them come to life.
                            </p>
                            <p>
                                Outside of work, you&apos;ll find me rock climbing, mixing tracks together, or playing just about any card game.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;