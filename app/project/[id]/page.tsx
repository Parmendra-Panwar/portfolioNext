import { notFound } from "next/navigation";
import Image from "next/image";
import projects from "../data";

export default async function ProjectPage({ params }: { params: { id: string } }) {
	const id = params.id; // NO `await` here
	const project = projects.find((p) => p.id === Number(id));

	if (!project) return notFound();

	return (
		<div className="flex flex-row gap-6 px-4 md:px-24 py-8 bg-red-100 border">
			<div>
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
			<div>
				<h2 className="experience-sub-title project-title">Project Description</h2>
			</div>
		</div>
	);
}
