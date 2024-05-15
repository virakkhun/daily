import { SupabaseClient } from "@supabase/supabase-js";
import { ProfileDTO } from "../dto/profile.dto";

export const ProfileAPI = {
  get: async (s: SupabaseClient) => {
    const {
      data: { user },
    } = await s.auth.getUser();
    return s.from("profiles").select<"*", ProfileDTO>("*").eq("id", user?.id);
  },
  create: async (s: SupabaseClient) => {
    const {
      data: { user },
    } = await s.auth.getUser();
    return s
      .from("profiles")
      .insert({ first_name: user?.email, last_name: "", id: user?.id });
  },
  update: async (s: SupabaseClient, dto: Partial<ProfileDTO>) => {
    const { data } = await ProfileAPI.get(s);
    const profile = data?.at(0);

    return s
      .from("profiles")
      .update({ ...profile, first_name: dto.first_name })
      .eq("id", profile?.id);
  },
};
