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
  between: "justify-between",
  center: "justify-center",
  start: "justify-start",
  end: "justify-end",
};

const Direction = {
  col: "flex-col",
  row: "flex-row",
};

type Props = {
  gap?: keyof typeof Gap;
  align?: keyof typeof Align;
  justify?: keyof typeof Justify;
  direction?: keyof typeof Direction;
  children: ReactNode;
};

export function Flex({
  gap = "sm",
  align = "center",
  justify = "start",
  direction = "row",
  children,
}: Props) {
  return (
    <div
      className={`flex ${Gap[gap]} ${Direction[direction]} ${Align[align]} ${Justify[justify]}`}
    >
      {children}
    </div>
  );
}
