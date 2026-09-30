import type { Metadata } from "next";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectRow from "@/components/ProjectRow";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full-stack, machine learning and product projects by Natalie Ovcharov.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  // the list in lib/projects.ts is newest first
  const [latest, ...others] = projects;

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Projects</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-400">
        What I&apos;ve been building, newest first.
      </p>

      <section className="mt-12" aria-labelledby="latest-heading">
        <h2
          id="latest-heading"
          className="mb-4 text-xs uppercase tracking-widest text-zinc-500"
        >
          Most recent project
        </h2>
        <FeaturedProject project={latest} />
      </section>

      <section className="mt-16" aria-labelledby="others-heading">
        <h2
          id="others-heading"
          className="text-xs uppercase tracking-widest text-zinc-500"
        >
          Other projects
        </h2>
        <ul className="mt-2 divide-y divide-white/10 border-b border-white/10">
          {others.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </ul>
      </section>
    </>
  );
}
