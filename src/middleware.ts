import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "./core/applications/services/supbase.middleware";
import { createClient } from "./core/applications/services/supabase";
import { cookies } from "next/headers";
import {
  AUTH_QUERY,
  AUTH_QUERY_KEY,
} from "./app/auth/_domains/constants/auth-query";

export async function middleware(request: NextRequest) {
  await updateSession(request);
  const supbase = createClient(cookies());
  const {
    data: { user },
  } = await supbase.auth.getUser();
  if (!user)
    return NextResponse.redirect(
      new URL(`auth?${AUTH_QUERY_KEY}=${AUTH_QUERY.LOGIN}`, request.url),
    );
  return NextResponse.next();
}

export const config = {
  matcher: ["/create-todo"],
};
