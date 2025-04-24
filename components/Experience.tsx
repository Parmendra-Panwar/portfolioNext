"use client"
import Image from "next/image";
import "../app/page.css";
import Link from "next/link";

const frontendSkills = [
  { name: "React", level: "Experienced" },
  { name: "Redux", level: "Experienced" },
  { name: "CSS", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "TypeScript", level: "Basic" },
  { name: "Jest & RTL", level: "Basic" },
  { name: "BootStrap", level: "Basic" },
  { name: "Next (SSR)", level: "Basic" },
];

const backendSkills = [
  { name: "Mongo DB", level: "Intermediate" },
  { name: "Node JS", level: "Intermediate" },
  { name: "Express JS", level: "Intermediate" },
  { name: "Git", level: "Intermediate" },
  { name: "Aggregation", level: "Basic" },
  { name: "MVC Architecture", level: "Basic" },
];

export default function Experience() {
  return (
    <>
      <section id="experience">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <br />
        <div className="experience-card">
          <h2 className="experience-card-title">React Frontend Developer</h2>
          <p className="experience-card-company">Medorn Ventures, Bhopal <span>January 2023 - Present</span></p>

          <p className="experience-card-description">
            As a <strong>Frontend React Intern</strong>, I contribute to a modern SaaS application by building responsive, pixel-perfect UIs using <strong>React.js, Next.js</strong>, and UI/UX best practices.
          </p>

          <ul className="experience-card-list">
            <li>Developed and optimized interactive UI components for seamless user experiences.</li>
            <li>Worked on **state management** and API integrations, improving data flow efficiency.</li>
            <li>Enhanced application **performance and usability** through precise UI modifications.</li>
            <li>Collaborated with senior developers to integrate **RESTful APIs**, reducing API call failures by **20%**.</li>
            <li>Ensured code maintainability by writing **clean, modular, and reusable components**.</li>
          </ul>
        </div>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                {frontendSkills.map((skill, index) => (
                  <article key={index}>
                    <Image width={300} height={350} src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                    <div>
                      <h3 className="makeMeDark">{skill.name}</h3>
                      <p className="makeMeLighter">{skill.level}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                {backendSkills.map((skill, index) => (
                  <article key={index}>
                    <Image width={300} height={350} src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                    <div>
                      <h3 className="makeMeDark">{skill.name}</h3>
                      <p className="makeMeLighter">{skill.level}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Link href={'./#projects'}>
          <Image width={300} height={350} src="/assets/arrow.png" alt="Arrow icon" className="icon arrow" />
        </Link>
      </section>
    </>
  );
}