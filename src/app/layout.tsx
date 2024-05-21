import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "./_components/header";
import { Suspense } from "react";
import { AsyncLoggedInUserProfile } from "./_components/logged-in-user-profile";
import { ProfileController } from "./profile/_applications/controllers/profile.controller";
import { Loading } from "./_components/loading";
import { supbaseServerClient } from "@/core/applications/services/supabase";

const inter = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Todo App",
  description:
    "Managing your tasks for the next hour, or today or in the next week",
  keywords: "todo app, small tasks, manage task, daily task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = supbaseServerClient();
  const loggedInProfile = ProfileController.get(supabase);

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header>
          <Suspense fallback={<Loading w="w-10" h="h-10" />}>
            <AsyncLoggedInUserProfile profile={loggedInProfile} />
          </Suspense>
        </Header>
        <main className="mx-auto lg:px-36 md:px-16 px-4">{children}</main>
      </body>
    </html>
  );
}
