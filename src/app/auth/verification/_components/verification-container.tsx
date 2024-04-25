"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

export function VerificationContainer(props: Props) {
  return (
    <div className="w-full md:px-0 px-2 h-svh flex justify-center items-center">
      <div className="w-fit flex flex-col gap-2 justify-center items-center">
        {props.children}
      </div>
    </div>
  );
}
