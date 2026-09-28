import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import Tag from "./Tag";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/70 backdrop-blur transition-colors hover:border-sky-300/50">
      {project.video && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-zinc-900">
          <Image
            src={project.video.poster}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          {project.year} · {project.role}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-white">
          {/* The ::after makes the whole card clickable while keeping one real link. */}
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 leading-7 text-zinc-400">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t}><Tag>{t}</Tag></li>
          ))}
        </ul>
      </div>
    </article>
  );
}
