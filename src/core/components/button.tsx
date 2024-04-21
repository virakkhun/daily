"use client";

const style = "text-center rounded-md";
const Intent = {
  primary:
    "text-white bg-blue-400 hover:bg-blue-500 focus:ring focus:ring-gray-200",
  secondary: "text-black bg-gray-300",
  danger: "text-white bg-red-400",
};
const Padding = {
  sm: "py-1 px-3",
  md: "py-2 px-4",
  lg: "py-3 px-5",
};
const Size = {
  full: "w-full",
  fit: "w-fit",
};

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    intent: keyof typeof Intent;
    padding: keyof typeof Padding;
    size: keyof typeof Size;
  }>;

export function Button({
  intent = "primary",
  padding = "md",
  size = "fit",
  className,
  ...restProps
}: Props) {
  const styleProps = `${Intent[intent]} ${Padding[padding]} ${Size[size]}`;
  return (
    <button
      {...restProps}
      className={`${style} ${styleProps} ${className} ${restProps.disabled && "opacity-50"}`}
    />
  );
}
