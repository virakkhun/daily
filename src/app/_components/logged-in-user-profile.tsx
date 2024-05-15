import { Button } from "@/core/components/button";
import { Avatar } from "@/core/components/avatar";
import Link from "next/link";
import { Profile } from "../profile/_applications/models/profile";

type Props = {
  profile: Promise<Profile>;
};

export async function AsyncLoggedInUserProfile(props: Props) {
  const profile = await props.profile;

  return !!profile?.firstName ? (
    <Link href="/profile">
      <Avatar name={profile.firstName} />
    </Link>
  ) : (
    <Link href="/auth">
      <Button padding="sm">sign in</Button>
    </Link>
  );
}
