import { SupabaseClient } from "@supabase/supabase-js";
import { ProfileAPI } from "../../_infrastructure/apis/profile.api";
import { ProfileMapper } from "../../_infrastructure/mappers/profile.mapper";

export const ProfileController = {
  get: async (s: SupabaseClient) => {
    const { data: profiles } = await ProfileAPI.get(s);
    return ProfileMapper.toDomain(profiles?.at(0)!);
  },
};
