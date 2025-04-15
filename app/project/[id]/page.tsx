import { notFound } from "next/navigation";
import Image from "next/image";
import projects from "../data";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: { id: string } }) {
	const id = params.id;
	const project = projects.find((p) => p.id === Number(id));

	if (!project) return notFound();

	// Default description and features if not available
	const defaultDescription = "This is a placeholder description for the project. You can update your project data to include a dynamic description. It should briefly explain what the project does, the tech stack used, and its uniqueness.";

	const defaultFeatures = [
		"Fully responsive and mobile-first design",
		"GitHub and Live Demo buttons integration",
		"Optimized image loading with Next.js Image component",
		"Styled using Tailwind CSS utility classes",
		"Dynamic route handling via next/navigation",
	];

	// Use project description and features, or default if not available
	const description = project.description || defaultDescription;
	const features = project.features || defaultFeatures;

	return (
		<div className="w-full bg-[#d1f8ef] py-10 md:py-16">
			<div className="max-w-screen-xl mx-auto px-4 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-10 lg:gap-16">
				{/* Left: Image */}
				<div className="w-full max-w-sm mx-auto lg:mx-0">
					<div className="aspect-[3/4] w-full relative rounded-2xl shadow-xl overflow-hidden">
						<Image
							src={project.image}
							alt={project.title}
							fill
							className="object-cover"
						/>
					</div>
				</div>

				{/* Right: Content */}
				<div className="w-full max-w-2xl space-y-6 lg:text-left">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-800">{project.title}</h1>

					<p className="text-gray-700 text-base md:text-lg leading-relaxed">
						{description}
					</p>

					<h2 className="text-xl font-semibold text-gray-700">Key Features</h2>
					<ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base">
						{features.map((feature, index) => (
							<li key={index}>{feature}</li>
						))}
					</ul>

					{/* Buttons */}
					<div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
						<Link 
						    href={project.github}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-color-2 project-btn"
							>
							GitHub
						</Link>
						{project.liveDemo && (
							<Link
								href={project.liveDemo}
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn-color-2 project-btn"
							>
								Live Demo
							</Link>
							
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
