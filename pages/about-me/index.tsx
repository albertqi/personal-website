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
                    <div className="w-1/2 rounded-full overflow-hidden outline outline-2 outline-white flex items-center justify-center">
                        <Image
                            src={profilePicture}
                            alt="Picture of Albert Qi"
                            priority={true}
                        />
                    </div>
                </div>
                <div className="lg:col-span-2 flex items-center justify-center">
                    <div className="space-y-8 text-dark font-light text-justify sm:w-5/6 p-8">
                        <p className="text-2xl text-center xl:text-justify">
                            Hi, I&apos;m Albert! I am from <span className="font-bold">Needham, Massachusetts</span>, and I study <span className="font-bold">computer science and statistics at Harvard</span>.
                        </p>
                        <div className="space-y-4">
                            <p>
                                I first fell in love with computer science in sixth grade when I was dragged into a Scratch club. To my pleasant surprise, Scratch had all the logical elements of math that I deeply enjoyed while also providing me with the creative freedom to build and engineer anything I could imagine.
                            </p>
                            <p>
                                Since then, I&apos;ve done everything from tutoring Java to building mobile applications to developing C++ libraries. My coursework has exposed me to a diverse range of topics, with some of my favorites including machine learning and distributed systems. I welcome any challenge that comes my way, as I am always looking to extract insight from my endeavors and apply my newfound knowledge to real-world applications.
                            </p>
                            <p>
                                Outside of the classroom, I also play the clarinet for Harvard&apos;s Bach Society Orchestra. I love playing squash, long-distance running, and a myriad of card games as well. As I continue my journey through life, I hope to embrace the many opportunities and obstacles that lie ahead and see where my curiosity takes me!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;