import { Kodchasan } from "next/font/google";
import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";
export const Koch = Kodchasan({ weight: "400", subsets: ["latin-ext"] });

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 14,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "6px 8px",
          borderRadius: "50%",
        }}
      >
        <p style={{ ...Koch.style }}>yd</p>
      </div>
    ),
    {
      ...size,
    },
  );
}
