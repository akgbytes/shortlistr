"use client";

import { useEffect } from "react";
import { useSession } from "@/lib/auth-client";
import { useAuthStore } from "@/store";

export const AuthSync = () => {
  const { data: session, isPending } = useSession();
  const setUser = useAuthStore((s) => s.setUser);

  useEffect(() => {
    if (!isPending) {
      console.log("initial auth checked");
      setUser(session?.user ?? null);
    }
  }, [session, isPending, setUser]);

  return null;
};
