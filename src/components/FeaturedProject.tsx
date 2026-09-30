import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import Tag from "./Tag";

// the newest project, shown big at the top of the projects page
export default function FeaturedProject({ project }: { project: Project }) {
  const source = project.links.find((l) => l.label === "Source code");

  return (
    <article className="grid items-center gap-10 rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur sm:p-10 md:grid-cols-[1fr_240px]">
      <div>
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          {project.year} · {project.role}
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 text-lg leading-8 text-zinc-300">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 transition-colors hover:bg-sky-200"
          >
            Read more
          </Link>
          {source && (
            <a
              href={source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm text-white transition-colors hover:border-sky-300 hover:text-sky-200"
            >
              Source code ↗
            </a>
          )}
        </div>
      </div>

      {project.video && (
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`${project.title} project page`}
          className="mx-auto block w-full max-w-[240px] overflow-hidden rounded-[2rem] border border-white/15 bg-zinc-900 shadow-2xl shadow-black/50"
        >
          <Image
            src={project.video.poster}
            alt={`${project.title} on a phone`}
            width={720}
            height={1280}
            sizes="240px"
            // above the fold on this page, so load it right away
            loading="eager"
            className="h-auto w-full"
          />
        </Link>
      )}
    </article>
  );
}
