import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full-stack, machine learning and product projects by Natalie Ovcharov.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
        Things I&apos;ve designed, built and shipped — from containerized web apps to a published
        Python package.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
