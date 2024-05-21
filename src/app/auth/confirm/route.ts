import { ProfileController } from "@/app/profile/_applications/controllers/profile.controller";
import { supbaseServerClient } from "@/core/applications/services/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const supabase = supbaseServerClient();
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
    await ProfileController.create(supabase);
  }

  return NextResponse.redirect(new URL("/profile", req.url));
}
