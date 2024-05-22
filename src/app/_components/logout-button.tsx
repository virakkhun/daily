"use client";

import { Button } from "@/core/components/button";

export function LogoutButton() {
  return (
    <form method="POST" action="/auth/signout">
      <Button type="submit" intent="transparent">
        logout
      </Button>
    </form>
  );
}
