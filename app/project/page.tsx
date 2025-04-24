import Image from "next/image";
import "../../app/page.css";
import Link from "next/link";
import projects from "./data";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Projects() {
     useEffect(() => {
        const lenis = new Lenis({
          lerp: 0.15, // Increase lerp for even smoother scroll
          duration: 1.5, // Slow down the scroll speed
          easing: (t: number) => Math.sin(t * (Math.PI / 2)), // Using a sine easing function for smoother scrolling
        });
    
        // Raf loop to drive the scroll
        const raf = (time: number) => {
          lenis.raf(time); // Update Lenis scroll state
          requestAnimationFrame(raf); // Keep animating
        };
    
        requestAnimationFrame(raf); // Start animation loop
    
        return () => {
          lenis.destroy(); // Cleanup when the component unmounts
        };
      }, []);
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