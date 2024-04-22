"use client";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Action(props: Props) {
  return (
    <button type="button" {...props}>
      {props.children}
    </button>
  );
}
