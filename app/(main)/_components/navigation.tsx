"use client";
import { Navbar } from "./navbar";

export const Navigation = () => {
  return (
    <>
      <aside className="group/sidebar relative w-60 h-full flex z-[9999] p-4">
        <div className="group-hover/sidebar:opacity-100 opacity-0 transition absolute w-1 h-full top-0 right-0 bg-primary/10"></div>
        <p>sidebar</p>
      </aside>
      <div className="absolute left-60 top-0 w-[calc(100%-240px)] h-fit z-[9999] ">
        <Navbar />
      </div>
    </>
  );
};
