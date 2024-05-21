import { supbaseServerClient } from "@/core/applications/services/supabase";
import { Suspense } from "react";
import { ProfileContainer } from "./_components/profile-container";
import { ProfileController } from "./_applications/controllers/profile.controller";
import { ProfileAvatar } from "./_components/profile-avatar";
import { ProfileLoading } from "./_components/profile-loading";

export default async function Page() {
  const supabase = supbaseServerClient();
  const resource = ProfileController.get(supabase);

  return (
    <ProfileContainer>
      <Suspense fallback={<ProfileLoading />}>
        <ProfileAvatar profile={resource} />
      </Suspense>
    </ProfileContainer>
  );
}
