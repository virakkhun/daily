"use client";

import { ReactNode } from "react";

const Gap = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
};

const Align = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
};

const Justify = {
  between: "justity-between",
  center: "justify-center",
  start: "justify-start",
  end: "justify-end",
};

type Props = {
  gap?: keyof typeof Gap;
  align?: keyof typeof Align;
  justify?: keyof typeof Justify;
  children: ReactNode;
};

export function Flex({
  gap = "sm",
  align = "center",
  justify = "start",
  children,
}: Props) {
  return (
    <div
      children={children}
      className={`flex ${Gap[gap]} ${Align[align]} ${Justify[justify]}`}
    />
  );
}
