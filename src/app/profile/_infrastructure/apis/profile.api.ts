import { SupabaseClient } from "@supabase/supabase-js";
import { ProfileDTO } from "../dto/profile.dto";

export const ProfileAPI = {
  get: async (s: SupabaseClient) => {
    const {
      data: { user },
    } = await s.auth.getUser();
    return s.from("profiles").select<"*", ProfileDTO>("*").eq("id", user?.id);
  },
};
