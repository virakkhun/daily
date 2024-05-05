import { Button } from "@/core/components/button";
import { RandomAvatar } from "@/core/components/random-avatar";
import Link from "next/link";
import { Profile } from "../profile/_applications/models/profile";

type Props = {
  profile: Promise<Profile>;
};

export async function AsyncLoggedInUserProfile(props: Props) {
  const profile = await props.profile;

  return !!profile?.firstName ? (
    <Link href="/profile">
      <RandomAvatar name={profile.firstName} />
    </Link>
  ) : (
    <Link href="/auth">
      <Button padding="sm">sign in</Button>
    </Link>
  );
}
