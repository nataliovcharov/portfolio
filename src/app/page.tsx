import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import TypingHeadline from "@/components/TypingHeadline";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <section className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <TypingHeadline text="Hi. I'm Natalie." />
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            I&apos;m a software engineer who builds full-stack and machine learning
            applications, and ships them with Docker and CI/CD pipelines.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-sky-200"
            >
              View projects
            </Link>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white/50"
            >
              Resume (PDF)
            </a>
          </div>
        </div>
        <Image
          src="/images/profile.jpg"
          alt="Portrait of Natalie Ovcharov"
          width={413}
          height={531}
          priority
          className="mx-auto w-56 rounded-2xl border border-white/10 object-cover shadow-2xl shadow-sky-500/10 sm:w-64"
        />
      </section>

      <section aria-labelledby="featured" className="mt-28">
        <div className="flex items-end justify-between gap-4">
          <h2 id="featured" className="text-2xl font-semibold tracking-tight text-white">
            Featured projects
          </h2>
          <Link href="/projects" className="text-sm text-sky-300 hover:text-sky-200">
            All projects →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
