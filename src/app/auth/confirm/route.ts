import { ProfileController } from "@/app/profile/_applications/controllers/profile.controller";
import { createClient } from "@/core/applications/services/supabase";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const supabase = createClient(cookies());
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
    await ProfileController.create(supabase);
  }

  return NextResponse.redirect(new URL("/profile", req.url));
}
