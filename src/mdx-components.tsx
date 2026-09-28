import type { MDXComponents } from "mdx/types";

// Styles for every element rendered from MDX project write-ups.
const components: MDXComponents = {
  h2: (props) => (
    <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-white" {...props} />
  ),
  h3: (props) => <h3 className="mt-8 mb-3 text-xl font-semibold text-white" {...props} />,
  p: (props) => <p className="my-4 leading-7 text-zinc-300" {...props} />,
  ul: (props) => <ul className="my-4 list-disc space-y-2 pl-6 text-zinc-300" {...props} />,
  ol: (props) => <ol className="my-4 list-decimal space-y-2 pl-6 text-zinc-300" {...props} />,
  li: (props) => <li className="leading-7 marker:text-sky-300" {...props} />,
  strong: (props) => <strong className="font-semibold text-white" {...props} />,
  a: (props) => (
    <a className="text-sky-300 underline underline-offset-4 hover:text-sky-200" {...props} />
  ),
  code: (props) => (
    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-zinc-100" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
