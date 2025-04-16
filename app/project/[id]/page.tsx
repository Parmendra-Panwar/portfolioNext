import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import projects from "../data";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export async function generateMetadata(props: Props) {
  const { id } = await props.params;
  const project = projects.find((p) => p.id.toString() === id);
  return {
    title: project?.title || "Project Not Found",
  };
}

export default async function ProjectPage(props: Props) {
  const { id } = await props.params;
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) return notFound();

  return (
    <div className="w-full bg-[#d1f8ef] py-10 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 lg:px-16 flex flex-col lg:flex-row gap-10 lg:gap-16">

        {/* Image Section */}
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

        {/* Text & Features Section */}
        <div className="w-full max-w-2xl space-y-6 lg:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            {project.title}
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {project.description}
          </p>

          <h2 className="text-xl font-semibold text-gray-700 pt-4">Key Features</h2>

          <ul className="list-disc list-inside space-y-2 pl-2 text-gray-600 text-base md:text-lg">
            {project.features.map((feature, index) => (
              <li key={index} className="ml-4">
                <span className="text-[#036666] font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          {/* Buttons (unchanged) */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
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