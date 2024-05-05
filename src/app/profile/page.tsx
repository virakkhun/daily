import { createClient } from "@/core/applications/services/supabase";
import { Flex } from "@/core/components/flex";
import { RandomAvatar } from "@/core/components/random-avatar";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { ProfileContainer } from "./_components/profile-container";
import { SignOutButton } from "../_components/sign-up-button";
import { ProfileController } from "./_applications/controllers/profile.controller";

export default async function Page() {
  const supabase = createClient(cookies());
  const { firstName } = await ProfileController.get(supabase);

  return (
    <ProfileContainer>
      <Flex direction="col">
        <Suspense fallback="loading...">
          <RandomAvatar size="md" name={firstName} />
          <h1>{firstName}</h1>
        </Suspense>
        <form className="mt-20" action="/auth/signout" method="POST">
          <SignOutButton />
        </form>
      </Flex>
    </ProfileContainer>
  );
}
