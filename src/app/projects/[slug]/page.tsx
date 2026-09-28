import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import DemoVideo from "@/components/DemoVideo";
import Tag from "@/components/Tag";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Any slug not listed above returns a 404.
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: project.video
      ? { images: [{ url: project.video.poster, alt: project.title }] }
      : undefined,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { default: Content } = await import(`@/content/projects/${slug}.mdx`);

  return (
    <article className="mx-auto max-w-3xl">
      <Link href="/projects" className="text-sm text-zinc-400 hover:text-white">
        ← All projects
      </Link>

      <header className="mt-8">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          {project.year} · {project.role}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-300">{project.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t}><Tag>{t}</Tag></li>
          ))}
        </ul>
        {project.links.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-white transition-colors hover:border-sky-300 hover:text-sky-200"
                >
                  {l.label} ↗
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {project.video && (
        <div className="mt-12">
          <DemoVideo src={project.video.src} poster={project.video.poster} title={project.title} />
        </div>
      )}

      <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/70 px-6 py-2 backdrop-blur sm:px-10">
        <Content />
      </div>
    </article>
  );
}
