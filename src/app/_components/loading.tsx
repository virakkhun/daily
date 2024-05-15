"use client";

type Props = Partial<{
  shape: "square" | "circle";
  w: string;
  h: string;
}>;

export function Loading({ shape = "circle", w = "w-5", h = "h-5" }: Props) {
  return (
    <div
      className={`bg-gray-100 animate-pulse ${w} ${h} ${shape === "circle" ? "rounded-full" : "rounded-md"}`}
    />
  );
}
