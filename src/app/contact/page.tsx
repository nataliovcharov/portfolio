import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Natalie Ovcharov.",
  alternates: { canonical: "/contact" },
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, external: false },
  { label: "LinkedIn", value: "Natalie Ovcharov", href: site.links.linkedin, external: true },
  { label: "GitHub", value: "@nataliovcharov", href: site.links.github, external: true },
];

export default function ContactPage() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-400">
        I&apos;m open to software engineering roles and interesting projects. The best way to
        reach me is email.
      </p>
      <ul className="mt-12 grid gap-4 sm:grid-cols-3">
        {channels.map((c) => (
          <li key={c.label}>
            <a
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="block rounded-2xl border border-white/10 bg-zinc-950/70 p-6 backdrop-blur transition-colors hover:border-sky-300/50"
            >
              <span className="text-xs uppercase tracking-widest text-zinc-500">{c.label}</span>
              <span className="mt-2 block break-all text-white">{c.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
