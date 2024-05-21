import { AuthContainer } from "./_component/auth-container";
import { AuthForm } from "./_applications/models/auth-form";
import { AUTH_QUERY } from "./_domains/constants/auth-query";
import { AuthController } from "./_applications/controllers/auth.controller";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { Suspense } from "react";
import { supbaseServerClient } from "@/core/applications/services/supabase";

export default function Page() {
  async function action(f: FormData) {
    "use server";

    const supabase = supbaseServerClient();

    const data: AuthForm = {
      email: f.get("email") as string,
      password: f.get("password") as string,
      formName: f.get("formName") as AUTH_QUERY,
    };

    if (data.formName === AUTH_QUERY.SIGN_UP) {
      const { error } = await AuthController.singUp(supabase, {
        email: data.email,
        password: data.password,
      });
      if (!!error?.message) throw new Error(error.message);
      revalidatePath("/", "layout");
      redirect("/auth/verification");
    }

    const { error } = await AuthController.login(supabase, {
      email: data.email,
      password: data.password,
    });

    if (!!error?.message) throw new Error(error.message);
    revalidatePath("/", "layout");
    redirect("/");
  }

  return (
    <form action={action}>
      <Suspense>
        <AuthContainer />
      </Suspense>
    </form>
  );
}
