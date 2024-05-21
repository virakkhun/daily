"use client";

import { RefObject, forwardRef, useEffect } from "react";

const style = "rounded-md";

const Padding = {
  sm: "py-1 px-3",
  md: "py-2 px-4",
  lg: "py-3 px-5",
};

type Props = React.InputHTMLAttributes<HTMLInputElement> &
  Partial<{
    padding: keyof typeof Padding;
  }>;

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ padding = "md", className, ...restProps }, ref) => {
    const defaultStyle =
      "w-full text-gray-900 bg-gray-100 outline outline-gray-200 focus:ring focus:ring-offset-2 focus:ring-gray-100";
    const styleProps = `${Padding[padding]} ${defaultStyle}`;
    return (
      <input
        {...restProps}
        ref={ref}
        className={`${style} ${styleProps} ${className} ${restProps.disabled && "opacity-50"}`}
      />
    );
  },
);

export function useInputFocus(ref: RefObject<HTMLInputElement>) {
  useEffect(() => {
    ref.current?.focus();
  });
}

Input.displayName = "daily-input-custom-component";
