import { SupabaseClient } from "@supabase/supabase-js";
import { ProfileAPI } from "../../_infrastructure/apis/profile.api";
import { ProfileMapper } from "../../_infrastructure/mappers/profile.mapper";
import { ProfileDTO } from "../../_infrastructure/dto/profile.dto";

export const ProfileController = {
  get: async (s: SupabaseClient) => {
    const { data: profiles } = await ProfileAPI.get(s);
    return ProfileMapper.toDomain(profiles?.at(0)!);
  },
  create: async (s: SupabaseClient) => await ProfileAPI.create(s),
  update: async (s: SupabaseClient, dto: Partial<ProfileDTO>) =>
    await ProfileAPI.update(s, dto),
};
