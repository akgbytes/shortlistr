"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useAuthStore } from "@/store";

const Navbar = () => {
  const { user, clearUser } = useAuthStore();

  const handleLogout = async () => {
    await authClient.signOut();
    clearUser();
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">Shortlistr</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/upload" className="hover:text-primary transition-colors">
            Upload
          </Link>
          <Link
            href="/reviews"
            className="hover:text-primary transition-colors"
          >
            My Reviews
          </Link>
        </div>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
          >
            Sign out
          </button>
        ) : (
          <Link
            href="/sign-in"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity font-medium"
          >
            Get Started
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
