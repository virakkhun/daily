"use client";

import React from "react";
import { Icon } from "./icon";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  check: boolean;
};

export function CheckBox({ check, ...rest }: Props) {
  const defaultClass = "w-5 h-5 border-gray-400 border-2 rounded-full";
  const isCheck = check && "flex justify-center items-center bg-gray-400";

  return (
    <button {...rest} type="button" className={`${isCheck} ${defaultClass}`}>
      {check && <Icon.Tick className="w-3 h-3 text-white" />}
    </button>
  );
}
