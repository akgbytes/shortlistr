"use client";

import { signIn } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

const SignInForm = () => {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleSocialLogin = async (provider: "google" | "github") => {
    setIsPending(true);

    await signIn.social(
      { provider },
      {
        onSuccess: (ctx) => {
          toast.success("Signed in successfully");

          router.push("/");
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSettled: () => {
          setIsPending(false);
        },
      }
    );
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex flex-col gap-6 rounded-lg border bg-white p-6 shadow-sm">
        {/* HEADER */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-muted-foreground">Sign in to continue</p>
        </div>

        {/* ACTIONS */}
        <div className="flex flex-col gap-4">
          <button
            type="button"
            disabled={isPending}
            onClick={() => handleSocialLogin("google")}
            className="flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-neutral-50 disabled:opacity-50"
          >
            <Image src="/google.svg" alt="Google" width={16} height={16} />
            Continue with Google
          </button>

          <button
            type="button"
            disabled={isPending}
            onClick={() => handleSocialLogin("github")}
            className="flex items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-medium transition hover:bg-neutral-50 disabled:opacity-50"
          >
            <Image src="/github.svg" alt="GitHub" width={16} height={16} />
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
