import Image  from "next/image";
import "../app/page.css";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Triplinker Website",
      image: "/assets/project-1.png",
      github: "https://github.com/Parmendra-Panwar?tab=repositories",
      liveDemo: "",
    },
    {
      id: 2,
      title: "School System",
      image: "/assets/project-2.png",
      github: "https://github.com/Parmendra-Panwar?tab=repositories",
      liveDemo: "https://deviannapurna.onrender.com/",
    },
    {
      id: 3,
      title: "Task Manager",
      image: "/assets/project-3.png",
      github: "https://github.com/Parmendra-Panwar?tab=repositories",
      liveDemo: "",
    }, 
    {
      id: 4,
      title: "E-Commerce UI",
      image: "/assets/project-4.png",
      github: "https://github.com/Parmendra-Panwar/Appscrip-task-ParmendraPanwar",
      liveDemo: "https://appscrip-task-parmendra.netlify.app/",
    },
    {
      id: 5,
      title: "Wedding Management Portfolio",
      image: "/assets/project-5.png",
      github: "https://github.com/Parmendra-Panwar/Wedding_Management",
      liveDemo: "https://wedding-guru.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project) => (
            <div key={project.id} className="details-container color-container">
              <div className="article-container">
                <Image width={300} height={350} src={project.image} alt={project.title} className="picHand" />
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