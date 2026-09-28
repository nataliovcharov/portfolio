import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Link-preview image shown when the site is shared (LinkedIn, Slack, etc.).
export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#000",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 76, fontWeight: 700 }}>{site.name}</div>
        <div style={{ fontSize: 36, color: "#7dd3fc", marginTop: 16 }}>Software Engineer</div>
        <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 40 }}>
          Full-stack · Machine learning · Docker · CI/CD
        </div>
      </div>
    ),
    size,
  );
}
