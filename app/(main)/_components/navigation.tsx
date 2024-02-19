"use client";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Navbar } from "./navbar";
import { ElementRef, useRef, useState } from "react";
import { ChevronsLeft, MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

export const Navigation = () => {
  const { user } = useUser();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const isResizingRef = useRef(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    isResizingRef.current = true;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizingRef.current) return;
    let newWidth = e.clientX;
    if (newWidth < 240) newWidth = 240;
    if (newWidth > 480) newWidth = 480;

    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`;
      navbarRef.current.style.setProperty("left", `${newWidth}px`);
      navbarRef.current.style.setProperty(
        "width",
        `calc(100% - ${newWidth}px)`
      );
    }
  };
  const handleMouseUp = () => {
    isResizingRef.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mousedown", handleMouseUp);
  };
  const collapse = (e: React.MouseEvent) => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.left = "0";
      navbarRef.current.style.width = "100%";

      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const resetWidth = (e: React.MouseEvent) => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = "240px";
      navbarRef.current.style.left = "240px";
      navbarRef.current.style.width = "calc(100%-240px)px";

      setTimeout(() => setIsResetting(false), 300);
    }
  };
  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar relative w-60 h-full bg-secondary flex z-[9999] overflow-x-auto  flex-col items-center",
          isResetting && "transition-all ease-in-out duration-300"
        )}
      >
        <div
          onClick={collapse}
          role="button"
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>

        <div
          onClick={resetWidth}
          onMouseDown={handleMouseDown}
          className="group-hover/sidebar:opacity-100 opacity-0 transition absolute w-1 h-full top-0 right-0 bg-primary/10 cursor-ew-resize"
        />
      </aside>
      <MenuIcon
        onClick={resetWidth}
        className={cn(
          "hidden absolute top-2 left-2 cursor-pointer z-[10000]",
          isCollapsed && "block"
        )}
      />

      <div
        ref={navbarRef}
        className={cn(
          "absolute left-60 top-0 w-[calc(100%-240px)] h-fit z-[9999] ",
          isResetting && "transition-all ease-in-out duration-300"
        )}
      >
        <Navbar />
      </div>
    </>
  );
};
