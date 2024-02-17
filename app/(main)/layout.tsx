import React from "react";
import { Navigation } from "./_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex dark:bg-[#1f1f1f]">
      <Navigation />
      <main className="flex-1 overflow-y-auto mt-20 ml-10">{children}</main>
    </div>
  );
};

export default MainLayout;
