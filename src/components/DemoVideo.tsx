/**
 * Demo video that only downloads when the visitor presses play.
 */
export default function DemoVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  return (
    <figure className="mx-auto max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
      <video
        controls
        playsInline
        muted
        preload="none"
        poster={poster}
        className="h-auto w-full"
        aria-label={`${title} demo video`}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
      <figcaption className="sr-only">{title} demo</figcaption>
    </figure>
  );
}
