import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center">
      <p className="text-sm uppercase tracking-widest text-sky-300">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-white">Page not found</h1>
      <p className="mt-4 text-zinc-400">That page doesn&apos;t exist or has moved.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-sky-200"
      >
        Back home
      </Link>
    </div>
  );
}
