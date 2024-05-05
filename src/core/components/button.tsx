"use client";

const style = "text-center rounded-md";
const Intent = {
  primary:
    "text-white bg-blue-400 hover:bg-blue-500 focus:ring focus:ring-gray-200",
  secondary: "text-black bg-gray-300",
  danger: "text-white bg-red-400",
};
const Padding = {
  sm: "py-1 px-3 text-sm",
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
    loading: boolean;
  }>;

export function Button({
  intent = "primary",
  padding = "md",
  size = "fit",
  loading = false,
  className,
  children,
  ...restProps
}: Props) {
  const opacity = (restProps?.disabled || loading) && "opacity-50";
  const styleProps = `${Intent[intent]} ${Padding[padding]} ${Size[size]}`;
  return (
    <button
      {...restProps}
      disabled={loading || restProps.disabled}
      className={`${style} ${styleProps} ${className} ${opacity}`}
    >
      {loading ? "loading..." : children}
    </button>
  );
}
