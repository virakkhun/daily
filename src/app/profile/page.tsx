import { createClient } from "@/core/applications/services/supabase";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { ProfileContainer } from "./_components/profile-container";
import { ProfileController } from "./_applications/controllers/profile.controller";
import { ProfileAvatar } from "./_components/profile-avatar";
import { ProfileLoading } from "./_components/profile-loading";

export default async function Page() {
  const supabase = createClient(cookies());
  const resource = ProfileController.get(supabase);

  return (
    <ProfileContainer>
      <Suspense fallback={<ProfileLoading />}>
        <ProfileAvatar profile={resource} />
      </Suspense>
    </ProfileContainer>
  );
}
