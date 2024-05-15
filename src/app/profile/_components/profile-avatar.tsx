import React from "react";
import { Profile } from "../_applications/models/profile";
import { Avatar } from "@/core/components/avatar";
import { ProfileCover } from "./profile-cover";
import { Flex } from "@/core/components/flex";
import { EditUsernameDialog } from "./edit-username-dialog";

type Props = {
  profile: Promise<Profile>;
};
export async function ProfileAvatar(props: Props) {
  const { firstName } = await props.profile;
  return (
    <div className="w-full">
      <ProfileCover imageUrl="https://images.unsplash.com/photo-1714112666418-7a82aad45a7b?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div className="-translate-y-20">
        <Flex direction="col">
          <Avatar size="md" name={firstName} />
          <EditUsernameDialog name={firstName}>
            <h1 className="font-bold text-lg">{firstName}</h1>
          </EditUsernameDialog>
        </Flex>
      </div>
    </div>
  );
}
