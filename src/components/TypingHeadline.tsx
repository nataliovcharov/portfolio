"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 70;
const HOLD_MS = 2500;

/**
 * Types out the text, holds, then retypes. The full text is always in the
 * accessible label, so screen readers and search engines read it once.
 */
export default function TypingHeadline({ text }: { text: string }) {
  const [count, setCount] = useState(text.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: ReturnType<typeof setTimeout>;
    let i = 0;
    const tick = () => {
      i += 1;
      setCount(i);
      timer = setTimeout(() => {
        if (i >= text.length) i = 0;
        tick();
      }, i >= text.length ? HOLD_MS : TYPE_MS);
    };
    timer = setTimeout(tick, 0);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <h1
      aria-label={text}
      className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
    >
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span className="ml-1 inline-block w-[0.08em] animate-pulse bg-sky-300 align-baseline">
          &nbsp;
        </span>
      </span>
    </h1>
  );
}
