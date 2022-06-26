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
            <div className="p-16 w-2/3 m-auto space-y-16">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-dark uppercase">Education</h1>
                        <div className="bg-primary h-1 w-1/12" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl text-dark font-semibold">Harvard University</h3>
                        <div className="text-dark font-light">
                            <p>Aug 2021 - May 2025</p>
                            <p>- Pursuing A.B. in Computer Science and Statistics</p>
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
                        <div className="bg-primary h-1 w-1/12" />
                    </div>
                    {experiences.map((experience) => (
                        <div key={experience.id} className="grid grid-cols-3 gap-8">
                            <div className="space-y-2">
                                <h3 className="text-xl text-dark font-semibold">{experience.company}</h3>
                                <p className="text-dark font-light">{experience.date}</p>
                            </div>
                            <div className="space-y-2 col-span-2">
                                <h2 className="text-xl text-dark">{experience.position}</h2>
                                <ul>
                                    {experience.description.map((description) => (
                                        <li key={description} className="text-dark font-light">- {description}</li>
                                    ))}
                                </ul>
                                <div>
                                    <a className="text-primary hover:text-primary-shade font-light" href={experience.link}>{experience.link}</a>
                                </div>
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