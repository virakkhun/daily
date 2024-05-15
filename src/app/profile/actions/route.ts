import { createClient } from "@/core/applications/services/supabase";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ProfileDTO } from "../_infrastructure/dto/profile.dto";
import { ProfileController } from "../_applications/controllers/profile.controller";

export async function POST(next: NextRequest) {
  const supabase = createClient(cookies());
  const fd = await next.formData();
  const dto: Partial<ProfileDTO> = {
    first_name: fd.get("name") as string,
  };

  const { error } = await ProfileController.update(supabase, dto);

  if (error?.message)
    return NextResponse.json(null, { status: 403, statusText: error?.message });

  return NextResponse.json(null, { status: 200 });
}
