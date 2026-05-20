import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Buğra Tiryaki";
  const eyebrow = searchParams.get("eyebrow") ?? "Buğra Tiryaki";

  const truncatedTitle = title.length > 90 ? `${title.slice(0, 87)}...` : title;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "120px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #c9a962, transparent)",
          }}
        />

        <p
          style={{
            fontSize: "20px",
            fontWeight: 400,
            color: "#c9a962",
            margin: 0,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </p>

        <h1
          style={{
            fontSize: "60px",
            fontWeight: 300,
            color: "#ffffff",
            margin: "32px 0 0 0",
            lineHeight: 1.15,
            letterSpacing: "0.02em",
            maxWidth: "1000px",
          }}
        >
          {truncatedTitle}
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "auto",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#c9a962",
            }}
          />
          <p
            style={{
              fontSize: "22px",
              fontWeight: 400,
              color: "#b8b8b8",
              margin: 0,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            bugratiryaki.com
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "120px",
            height: "3px",
            background:
              "linear-gradient(90deg, transparent, #c9a962, transparent)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
