import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <ul className="flex gap-6">
          <li><a className="hover:text-white" href={`mailto:${site.email}`}>Email</a></li>
          <li><a className="hover:text-white" href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="hover:text-white" href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}
