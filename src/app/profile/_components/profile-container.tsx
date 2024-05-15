"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ProfileContainer({ children }: Props) {
  return <div>{children}</div>;
}
