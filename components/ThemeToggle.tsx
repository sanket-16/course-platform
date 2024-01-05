"use client";
import { Laptop2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <>
      <div className="md:block hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.8rem] w-[1.8rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
              <Moon className="absolute h-[1.8rem] w-[1.8rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary " />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="flex gap-4 items-center"
              onClick={() => setTheme("light")}
            >
              <Sun className="h-[1rem] w-[1rem]" /> Light
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex gap-4 items-center"
              onClick={() => setTheme("dark")}
            >
              <Moon className="h-[1rem] w-[1rem]" /> Dark
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex gap-4 items-center"
              onClick={() => setTheme("system")}
            >
              <Laptop2 className="h-[1rem] w-[1rem]" /> System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default ThemeToggle;
