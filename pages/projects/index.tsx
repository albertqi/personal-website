import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getProjects } from "../../services/projects";

type Project = {
    id: number,
    title: string,
    description: string[],
    link: string,
}

type Props = {
    projects: Project[],
}

const Projects: NextPage<Props> = ({ projects }) => {
    return (
        <>
            <Head>
                <title>Albert Qi - Projects</title>
                <meta property="og:title" content="Albert Qi - Projects" />
                <meta name="description" content="Learn more about my projects!" />
            </Head>
            <div className="p-8 md:p-16 md:w-11/12 lg:w-2/3 m-auto">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-black text-dark uppercase">Projects</h1>
                        <div className="bg-primary h-1 w-20" />
                    </div>
                    {projects.map((project) => (
                        <div key={project.id} className="space-y-2">
                            <h3 className="text-xl text-dark font-semibold">{project.title}</h3>
                            <ul>
                                {project.description.map((description) => (
                                    <li key={description} className="text-dark font-light">- {description}</li>
                                ))}
                            </ul>
                            <p>
                                <a className="text-primary hover:text-primary-shade font-light" href={project.link}>{project.link}</a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const promises = [getProjects()];
    const [projects] = await Promise.all(promises);

    return {
        props: { projects },
        revalidate: 600
    };
}

export default Projects;