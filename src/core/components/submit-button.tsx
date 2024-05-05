"use client";

import { ReactNode } from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

type Props = {
  children: ReactNode;
  size?: "fit" | "full";
  intent?: "secondary" | "primary";
};
export function SubmitButton({
  size = "fit",
  intent = "primary",
  children,
}: Props) {
  const { pending: loading } = useFormStatus();
  return (
    <Button
      intent={intent}
      type="submit"
      padding="sm"
      size={size}
      disabled={loading}
      loading={loading}
    >
      {children}
    </Button>
  );
}
