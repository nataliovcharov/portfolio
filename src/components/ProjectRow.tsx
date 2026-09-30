import Link from "next/link";
import type { Project } from "@/lib/projects";
import Tag from "./Tag";

// one line in the "other projects" list
export default function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="group relative grid gap-2 py-6 sm:grid-cols-[80px_1fr] sm:gap-6">
      <p className="text-sm text-zinc-500">{project.year}</p>
      <div>
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-sky-200">
          {/* the ::after makes the whole row clickable while keeping one real link */}
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.title}
          </Link>
          <span className="ml-3 text-sm font-normal text-zinc-500">{project.role}</span>
        </h3>
        <p className="mt-2 max-w-2xl leading-7 text-zinc-400">{project.summary}</p>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
