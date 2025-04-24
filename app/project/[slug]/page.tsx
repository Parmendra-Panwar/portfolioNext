import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import projects from "../data";

export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((project) => project.id == slug)
  if (!project) return notFound();
  return (
    <>
      <section className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">{project.title}</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image with 3:4 ratio */}
          <div className="w-full aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Project Info */}
          <div className="flex flex-col justify-between">
            <p className="text-lg text-gray-700 mb-4">{project.description}</p>

            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <div className="mt-6 flex gap-4">
              <Link
                href={project.github}
                target="_blank"
                className="btn btn-color-2 project-btn flex justify-center align-center"
              >
                GitHub
              </Link>
              {project.liveDemo && (
                <Link
                  href={project.liveDemo}
                  target="_blank"
                  className="btn btn-color-2 project-btn flex justify-center align-center"
                >
                  Live Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
