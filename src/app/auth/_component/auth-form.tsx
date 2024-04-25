import { Input } from "@/core/components/input";
import React from "react";
import { AUTH_QUERY } from "../_domains/constants/auth-query";
import { SubmitButton } from "@/core/components/submit-button";

export function AuthFormField({ isSignUp }: { isSignUp: boolean }) {
  return (
    <div className="w-full my-6 flex flex-col gap-3">
      <Input type="email" placeholder="email" name="email" required />
      <Input type="password" placeholder="password" name="password" required />
      <Input
        type="hidden"
        value={isSignUp ? AUTH_QUERY.SIGN_UP : AUTH_QUERY.LOGIN}
        name="formName"
      />

      <SubmitButton size="full">continue</SubmitButton>
    </div>
  );
}
