/**
 * Site-wide settings. Update these in one place and every page picks them up.
 */
export const site = {
  name: "Natalie Ovcharov",
  title: "Natalie Ovcharov — Software Engineer",
  description:
    "Portfolio of Natalie Ovcharov: full-stack and machine learning projects with Docker, CI/CD, Python and React.",
  // Set NEXT_PUBLIC_SITE_URL in Netlify once you know your final domain.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "nataliovcharov@gmail.com",
  links: {
    github: "https://github.com/nataliovcharov",
    linkedin: "https://www.linkedin.com/in/natalie-ovcarov-65826529a",
  },
  resume: "/resume.pdf",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;
