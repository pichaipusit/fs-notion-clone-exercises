"use client";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-2">
      <span className="ml-8">Title</span>
      <div className="flex items-center gap-x-2 pt-2">
        <ModeToggle />
      </div>
    </nav>
  );
};
