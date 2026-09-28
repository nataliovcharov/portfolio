import Image from "next/image";
import Link from "next/link";
import ExperienceList from "@/components/ExperienceList";
import TypingHeadline from "@/components/TypingHeadline";
import { experience } from "@/lib/experience";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <TypingHeadline text="Hi. I'm Natalie." />
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            I&apos;m a software engineer who loves working at the intersection of AI and
            design, and bringing ideas to life.
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
          src="/images/newprofile.png"
          alt="Portrait of Natalie Ovcharov"
          width={800}
          height={800}
          priority
          sizes="(min-width: 640px) 18rem, 14rem"
          className="mx-auto aspect-square w-56 rounded-2xl border border-white/10 object-cover shadow-2xl shadow-sky-500/10 sm:w-72"
        />
      </section>

      <section aria-labelledby="experience" className="mt-28">
        <div className="flex items-end justify-between gap-4">
          <h2 id="experience" className="text-2xl font-semibold tracking-tight text-white">
            Experience
          </h2>
          <Link href="/resume" className="text-sm text-sky-300 hover:text-sky-200">
            Full resume →
          </Link>
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur sm:p-10">
          <ExperienceList items={experience.slice(0, 3)} />
        </div>
      </section>
    </>
  );
}
