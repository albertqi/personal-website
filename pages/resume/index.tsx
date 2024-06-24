import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getResume } from "../../services/resume";

type Coursework = {
    id: number,
    course: string,
}

type Experience = {
    id: number,
    company: string,
    position: string,
    date: string,
    description: string[],
    link: string,
}

type Props = {
    coursework: Coursework[],
    experiences: Experience[],
}

const Resume: NextPage<Props> = ({ coursework, experiences }) => {
    return (
        <>
            <Head>
                <title>Albert Qi - Resume</title>
                <meta property="og:title" content="Albert Qi - Resume" />
                <meta name="description" content="Learn more about my education and experience!" />
            </Head>
            <div className="p-8 md:p-16 space-y-8 md:space-y-16 md:w-11/12 lg:w-2/3 m-auto">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-dark uppercase">Education</h1>
                        <div className="bg-primary h-1 w-20" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl text-dark font-semibold">Harvard University</h3>
                        <div className="text-dark font-light">
                            <p>- S.M. in Computer Science (Aug 2024 - May 2025)</p>
                            <p>- A.B. in Computer Science and Statistics (Aug 2021 - May 2025)</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl text-dark font-semibold">Relevant Coursework</h3>
                        <ul>
                            {coursework.map((course) => (
                                <li key={course.id} className="text-dark font-light">- {course.course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-dark uppercase">Experience</h1>
                        <div className="bg-primary h-1 w-20" />
                    </div>
                    {experiences.map((experience) => (
                        <div key={experience.id} className="grid sm:grid-cols-3 gap-2 sm:gap-8">
                            <div className="space-y-2">
                                <h3 className="text-xl text-dark font-semibold">{experience.company}</h3>
                                <p className="hidden sm:block text-dark font-light">{experience.date}</p>
                            </div>
                            <div className="space-y-2 sm:col-span-2">
                                <div>
                                    <h2 className="text-lg sm:text-xl text-dark">{experience.position}</h2>
                                    <p className="block sm:hidden text-dark font-light">{experience.date}</p>
                                </div>
                                <ul>
                                    {experience.description.map((description) => (
                                        <li key={description} className="text-dark font-light">- {description}</li>
                                    ))}
                                </ul>
                                <p>
                                    <a className="text-primary hover:text-primary-shade font-light" href={experience.link}>{experience.link}</a>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const promises = [getResume("coursework"), getResume("experiences")];
    const [coursework, experiences] = await Promise.all(promises);

    return {
        props: { coursework, experiences },
        revalidate: 600
    };
}

export default Resume;