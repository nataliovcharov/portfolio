import type { Experience } from "@/lib/experience";
import Tag from "./Tag";

export default function ExperienceList({ items }: { items: Experience[] }) {
  return (
    <ol className="relative border-l border-white/15">
      {items.map((job) => (
        <li key={`${job.company}-${job.start}`} className="relative pb-12 pl-8 last:pb-0">
          <span
            aria-hidden="true"
            className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full ${
              job.end ? "bg-zinc-500" : "bg-sky-300 shadow-[0_0_12px] shadow-sky-300"
            }`}
          />
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            {job.start} – {job.end ?? "Present"} · {job.location}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">{job.role}</h3>
          <p className="text-sky-300">
            {job.companyUrl ? (
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-sky-200 hover:underline"
              >
                {job.company} ↗
              </a>
            ) : (
              job.company
            )}
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300 marker:text-zinc-600">
            {job.highlights.map((h) => (
              <li key={h} className="leading-7">{h}</li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
            {job.tags.map((t) => (
              <li key={t}><Tag>{t}</Tag></li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
