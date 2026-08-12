import { ImageResponse } from "next/og";

export const alt = "GS Insights — Inteligencia de mercado";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#050509",
          color: "#fdfdfd",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px 72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 600 }}>
          GS Insights<span style={{ color: "#c8ff64" }}>.</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 400,
              letterSpacing: "-3px",
              lineHeight: 0.98,
              maxWidth: 940,
            }}
          >
            Decide con mayor certeza.
          </div>
          <div style={{ color: "#a8acb8", display: "flex", fontSize: 25 }}>
            Inteligencia de mercado senior · México + LATAM
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #343640",
            display: "flex",
            fontSize: 18,
            justifyContent: "space-between",
            paddingTop: 24,
          }}
        >
          <span>ESTRATEGIA · CONSUMER INSIGHTS · MEDICIÓN</span>
          <span style={{ color: "#c8ff64" }}>GS-INSIGHTS.COM</span>
        </div>
      </div>
    ),
    size,
  );
}
