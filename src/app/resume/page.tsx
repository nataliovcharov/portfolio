import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Natalie Ovcharov.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Resume</h1>
        <a
          href={site.resume}
          download
          className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-sky-200"
        >
          Download PDF
        </a>
      </div>
      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
        <object data={site.resume} type="application/pdf" className="h-[80vh] w-full">
          <p className="p-6 text-zinc-300">
            Your browser can&apos;t display PDFs inline.{" "}
            <a className="text-sky-300 underline" href={site.resume}>
              Open the resume
            </a>
            .
          </p>
        </object>
      </div>
    </>
  );
}
