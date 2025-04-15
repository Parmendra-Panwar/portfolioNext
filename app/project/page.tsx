import Image from "next/image";
import "../../app/page.css";
import Link from "next/link";
import projects from "./data";

export default function Projects() {
    return (
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
                <div className="about-containers">
                    {projects.map((project) => (
                        <div key={project.id} className="details-container color-container">
                            <div className="article-container">
                                <Link
                                    href={`/project/${project.id}`}
                                >
                                    <Image width={300} height={350} src={project.image} alt={project.title} className="picHand" />
                                </Link>
                            </div>
                            <h2 className="experience-sub-title project-title">{project.title}</h2>
                            <div className="btn-container">
                                <a href={project.github}>
                                    <button className="btn btn-color-2 project-btn">Github</button>
                                </a>
                                {project.liveDemo && (
                                    <a href={project.liveDemo}>
                                        <button className="btn btn-color-2 project-btn">Live Demo</button>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Link href={'#contact'}>
                <Image width={300} height={350} src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" />
            </Link>
        </section>
    );
}