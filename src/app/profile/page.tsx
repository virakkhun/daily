import { createClient } from "@/core/applications/services/supabase";
import { cookies } from "next/headers";
import { Suspense } from "react";

export default async function Page() {
  const supabase = createClient(cookies());
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id);

  return (
    <Suspense fallback={<p>loading...</p>}>
      <p>hello {data?.at(0).first_name}</p>
    </Suspense>
  );
}
