"use client";
import ThemeToggle from "@/components/ThemeToggle";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data, status } = useSession();

  return (
    <main className="flex flex-col items-center justify-between px-24 min-h-[60vh]">
      Hi
    </main>
  );
}
