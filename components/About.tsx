import Image from "next/image";
import "../app/page.css";
import Link from "next/link";

export default function About() {
    return (
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <Image width={300} height={350} src="/assets/avtar2.png" alt="Profile picture" className="about-pic" />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <Image width={300} height={350} src="/assets/experience.png" alt="Experience icon" className="icon" />
                            <h3 className="makeMeDark">Experience</h3>
                            <p className="makeMeSecondDark">6 Month <br />Frontend Development</p>
                        </div>
                        <div className="details-container">
                            <Image width={300} height={350} src="/assets/education.png" alt="Education icon" className="icon" />
                            <h3 className="makeMeDark">Education</h3>
                            <p className="makeMeSecondDark">B.Tech. Bachelors Degree</p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p className="makeMeSecondDark">
                            Hi, I’m Parmendra Panwar, a versatile Full-Stack Developer with a strong foundation in React,
                            Node.js, and system architecture. I excel in building scalable, high-performance applications
                            with clean code, efficient APIs, and seamless UI/UX. My ability to quickly learn and implement
                            new technologies allows me to adapt across web development, backend engineering, DevOps, and
                            system optimization—making me a strong fit for software engineering roles.
                        </p>
                    </div>
                </div>
            </div>
            <Link href={"./#experience"}>
                <Image width={300} height={350} src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" />
            </Link>
        </section>
    );
}
