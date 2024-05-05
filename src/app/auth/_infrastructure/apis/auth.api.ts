import { SupabaseClient } from "@supabase/supabase-js";
import { LoginDTO } from "../dtos/login.dto";

export const AuthAPI = {
  login: (s: SupabaseClient, dto: LoginDTO) => {
    return s.auth.signInWithPassword({
      ...dto,
    });
  },
  signUp: (s: SupabaseClient, dto: LoginDTO) => {
    return s.auth.signUp({
      ...dto,
    });
  },
};
