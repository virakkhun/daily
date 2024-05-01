"use client";

import React from "react";
import { Flex } from "./flex";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  anchor: string;
  children: React.ReactNode;
};

export function InputRadio({ anchor, children, ...restProps }: Props) {
  return (
    <Flex>
      <input type="radio" className="w-5 h-5" id={anchor} {...restProps} />
      <label htmlFor={anchor}>{children}</label>
    </Flex>
  );
}
