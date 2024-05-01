"use client";

import { Icon } from "@/core/components/icon";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function ProfileContainer({ children }: Props) {
  return (
    <div className="mt-10 px-24">
      <Link href="/">
        <Icon.ChevronLeft className="w-5 h-5" />
      </Link>
      {children}
    </div>
  );
}
