"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  return (
    <div className="space-y-4 max-w-full">
      <h1 className="text-3xl sm:text-5xl md:text-6xl  font-bold">
        Capture, Organize, Inspire: Your Ideas, Your Notes, Your Way.
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        The connected workspace where <br />
        better, faster work happens.
      </h3>
      <Button asChild>
        <Link href="/documents">
          Take Note
          <ArrowRight className="h-4 w-4 ml-1" />
        </Link>
      </Button>
    </div>
  );
};
