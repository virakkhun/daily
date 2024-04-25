"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { AUTH_QUERY, AUTH_QUERY_KEY } from "../_domains/constants/auth-query";
import { Flex } from "@/core/components/flex";
import { AuthFormField } from "./auth-form";
import { AuthContainerHeader } from "./auth-container-header";
import { Button } from "@/core/components/button";
import { createClient } from "@/core/applications/services/supabase";

export function AuthContainer() {
  const route = useSearchParams();
  const isSignUp =
    !!route.get(AUTH_QUERY_KEY) &&
    route.get(AUTH_QUERY_KEY) === AUTH_QUERY.SIGN_UP;
  const path = `/auth?${AUTH_QUERY_KEY}=${isSignUp ? AUTH_QUERY.LOGIN : AUTH_QUERY.SIGN_UP}`;

  async function continueWithGoogle() {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });
  }

  return (
    <div className="w-full h-svh flex justify-center items-center">
      <div className="md:w-1/4 w-4/5">
        <Flex direction="col" gap="lg">
          <AuthContainerHeader />

          <Button intent="secondary" padding="sm" onClick={continueWithGoogle}>
            Continue with Google
          </Button>
          <AuthFormField isSignUp={isSignUp} />

          <Flex gap="sm">
            <span className="text-sm">
              {isSignUp ? "Already have an account?" : "Join for free"}
            </span>
            <Link className="text-sm text-blue-400" href={path}>
              {isSignUp ? "login" : "sign up"}
            </Link>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
