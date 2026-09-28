/**
 * Work experience shown on the home page, newest first.
 * Leave `end` undefined for a current role.
 */
export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  start: string;
  end?: string;
  highlights: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Founding Engineer",
    company: "AUTHE IT",
    companyUrl: "https://autheit.com/",
    location: "New York, NY · Hybrid",
    start: "Sep 2025",
    highlights: [
      "Built a proprietary computer vision system for luxury handbag authentication as founding engineer, using deep learning, anomaly detection and transfer learning in Python and PyTorch.",
      "Developed a FastAPI and PostgreSQL REST API that runs ML inference on user submissions for expert review.",
      "Deployed ML services on Google Cloud Platform (GCP) with CI/CD pipelines using GitHub Actions and Docker.",
      "Designed the iOS app in Figma, built it in Swift/SwiftUI, and led the private beta launch through TestFlight.",
    ],
    tags: ["Python", "PyTorch", "Computer Vision", "FastAPI", "PostgreSQL", "GCP", "Docker", "Swift/SwiftUI"],
  },
  {
    role: "WordPress Engineer",
    company: "Classifiedy",
    location: "Remote",
    start: "Feb 2025",
    end: "Dec 2025",
    highlights: [
      "Joined as an intern and continued to collaborate on a project basis, building and launching multiple client websites.",
      "Developed custom WordPress and OSclass themes and plugins using PHP, MySQL, JavaScript and HTML/CSS.",
      "Applied on-page SEO, responsive design and page speed optimization to improve client site visibility and performance.",
      "Led a small engineering team in an Agile workflow, running sprint planning, code reviews and website deployments.",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "WordPress", "SEO", "Agile"],
  },
  {
    role: "Computer Science Tutor",
    company: "New York University",
    location: "New York, NY",
    start: "Jan 2025",
    end: "May 2025",
    highlights: [
      "Provided in-person and online tutoring to 5–6 students daily, guiding them through core Java concepts like object-oriented programming (OOP), recursion, inheritance, arrays and sorting algorithms.",
      "Debugged Java programs in Eclipse, teaching breakpoints, step-through execution and watch variables to resolve errors.",
    ],
    tags: ["Java", "Eclipse", "Teaching"],
  },
];
