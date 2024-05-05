import { SupabaseClient } from "@supabase/supabase-js";
import { LoginDTO } from "../../_infrastructure/dtos/login.dto";
import { AuthAPI } from "../../_infrastructure/apis/auth.api";
import { SignUpDTO } from "../../_infrastructure/dtos/sign-up.dto";

export const AuthController = {
  login: (s: SupabaseClient, dto: LoginDTO) => AuthAPI.login(s, dto),
  singUp: (s: SupabaseClient, dto: SignUpDTO) => AuthAPI.signUp(s, dto),
};
