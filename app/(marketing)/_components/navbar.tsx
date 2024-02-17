"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import Link from "next/link";

export const Navbar = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <div className="p-2 dark:bg-[#1f1f1f] flex justify-between items-center">
      <span>Fake Logo</span>
      <div className="flex justify-between items-center gap-x-2">
        {isLoading && <p>Loading..</p>}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </SignInButton>
            <SignInButton mode="modal">
              <Button size="sm">Take note free</Button>
            </SignInButton>
          </>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button variant="ghost" size="sm">
              <Link href="/documents">Take Note</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </>
        )}
        <div className="ml-2">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
