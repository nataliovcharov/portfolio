/**
 * Project registry. To add a project:
 *   1. Add an entry below.
 *   2. Create src/content/projects/<slug>.mdx with the write-up.
 */
export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  role: string;
  tags: string[];
  featured?: boolean;
  video?: { src: string; poster: string };
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "dupka",
    title: "Dupka",
    summary:
      "A web app for reporting potholes in Skopje. A YOLO model I trained finds the damage, faces and plates get blurred, and reports show up on a public map.",
    year: "2026",
    role: "Solo project",
    tags: ["Python", "FastAPI", "PostGIS", "React", "PyTorch", "YOLO", "Docker"],
    featured: true,
    video: {
      src: "/videos/dupka-demo.mp4",
      poster: "/images/dupka-poster.jpg",
    },
    links: [{ label: "Source code", href: "https://github.com/nataliovcharov/dupka" }],
  },
  {
    slug: "hydroforest",
    title: "HydroForest",
    summary:
      "A water tracking app where every bottle you drink grows a tree in your own digital forest, with daily streaks, a leaderboard and friends.",
    year: "2025",
    role: "Team project",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Mocha"],
    links: [],
  },
  {
    slug: "wearther",
    title: "WEARther",
    summary:
      "A web app that pairs real-time weather with outfit recommendations, built as a Dockerized monorepo with per-service CI/CD.",
    year: "2024",
    role: "Team project",
    tags: ["Python", "MongoDB", "Docker", "GitHub Actions", "DigitalOcean"],
    featured: true,
    links: [
      // Hidden until the repo is public on your own account:
      // { label: "Source code", href: "https://github.com/software-students-fall2024/5-final-java_and_the_scripts_1" },
    ],
  },
  {
    slug: "voice-journal",
    title: "Voice Journal",
    summary:
      "A hands-free journal that transcribes your speech, analyzes its sentiment and charts your mood over time.",
    year: "2024",
    role: "Team project",
    tags: ["Machine Learning", "Flask", "MongoDB", "Docker", "GitHub Actions"],
    featured: true,
    links: [
      // Hidden until the repo is public on your own account:
      // { label: "Source code", href: "https://github.com/software-students-fall2024/4-containers-java-and-the-scripts-1" },
    ],
  },
  {
    slug: "python-package",
    title: "Python Package on PyPI",
    summary:
      "A tested, documented Python package with four configurable functions, published to PyPI with automated CI.",
    year: "2024",
    role: "Team project",
    tags: ["Python", "pytest", "pipenv", "PyPI", "GitHub Actions"],
    links: [
      // Hidden until the repo is public on your own account:
      // { label: "Source code", href: "https://github.com/software-students-fall2024/3-python-package-java_and_the_scripts_" },
      // TODO: add { label: "PyPI package", href: "https://pypi.org/project/<name>/" }
    ],
  },
  {
    slug: "app-specification",
    title: "Mobile App Specification",
    summary:
      "A complete product specification for a mobile app — from vision statement and user stories to UML and a clickable Figma prototype.",
    year: "2024",
    role: "Team project",
    tags: ["Product", "Figma", "UML", "Requirements"],
    links: [
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/x2JhHpZTehmD7ZdGMTlu7I/SEprojectwireframe?node-id=0-1&t=jdBQfUi0t9potZVz-1",
      },
      // Hidden until the repo is public on your own account:
      // { label: "Source code", href: "https://github.com/software-students-fall2024/1-specification-java-and-the-scripts" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
