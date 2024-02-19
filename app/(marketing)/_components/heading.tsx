"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isLoading, isAuthenticated } = useConvexAuth();
  return (
    <div className="space-y-4 max-w-full pt-4">
      <h1 className="text-3xl sm:text-5xl  font-bold">
        Capture, Organize, Inspire: Your Ideas, Your Notes, Your Way.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        The connected workspace where <br />
        better, faster work happens.
      </h3>
      {!isAuthenticated && !isLoading && (
        <>
          <SignInButton mode="modal">
            <Button size="sm">Free Note</Button>
          </SignInButton>
        </>
      )}
      {isAuthenticated && !isLoading && (
        <>
          <Button size="sm" asChild>
            <Link href="/documents">Enter Note</Link>
          </Button>
        </>
      )}
    </div>
  );
};
