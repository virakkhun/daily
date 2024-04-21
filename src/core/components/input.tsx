"use client";

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

export function Input({ padding = "md", className, ...restProps }: Props) {
  const defaultStyle =
    "w-full text-gray-900 bg-gray-100 outline outline-gray-200 focus:ring focus:ring-offset-2 focus:ring-gray-100";
  const styleProps = `${Padding[padding]} ${defaultStyle}`;
  return (
    <input
      {...restProps}
      className={`${style} ${styleProps} ${className} ${restProps.disabled && "opacity-50"}`}
    />
  );
}
