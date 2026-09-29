import { ImageResponse } from "next/og";
import { fullTitle, profile } from "@/data/portfolio";

/**
 * Social share image (Open Graph / Twitter), generated at build time.
 * Shown when the site link is shared on LinkedIn, WhatsApp, X, etc.
 */
export const alt = `${profile.name} — ${fullTitle}`;
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
          padding: "80px",
          background: "linear-gradient(135deg, #0a1a2b 0%, #1f4e79 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 96,
            height: 96,
            borderRadius: 20,
            background: "#ffffff",
            color: "#1f4e79",
            fontSize: 44,
            fontWeight: 700,
          }}
        >
          {profile.initials}
        </div>
        <div style={{ marginTop: 48, fontSize: 80, fontWeight: 700, letterSpacing: -2 }}>
          {profile.name}
        </div>
        <div style={{ marginTop: 16, fontSize: 38, color: "#adc9e3" }}>{fullTitle}</div>
        <div style={{ marginTop: 40, fontSize: 28, color: "#d6e4f1" }}>
          {profile.location}
        </div>
      </div>
    ),
    size,
  );
}
