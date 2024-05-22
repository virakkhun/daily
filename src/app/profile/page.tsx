import { supbaseServerClient } from "@/core/applications/services/supabase";
import { Suspense } from "react";
import { ProfileContainer } from "./_components/profile-container";
import { ProfileController } from "./_applications/controllers/profile.controller";
import { ProfileAvatar } from "./_components/profile-avatar";
import { ProfileLoading } from "./_components/profile-loading";
import { LogoutButton } from "../_components/logout-button";

export default async function Page() {
  const supabase = supbaseServerClient();
  const resource = ProfileController.get(supabase);

  return (
    <ProfileContainer>
      <Suspense fallback={<ProfileLoading />}>
        <ProfileAvatar profile={resource} />
      </Suspense>

      <div className="z-50 absolute flex justify-center items-center bottom-0 left-0 py-2 border-t-gray-100 border-t w-full">
        <LogoutButton />
      </div>
    </ProfileContainer>
  );
}
