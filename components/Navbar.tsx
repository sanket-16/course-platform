"use client";
import Link from "next/link";
import { Session } from "next-auth";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

const Navbar = () => {
  const { data, status } = useSession();
  console.log(data);
  return (
    <nav className="flex justify-between items-center p-8">
      <Link href="/" className="text-2xl font-bold">
        Course.io
      </Link>
      <ul className="flex gap-4 items-center text-foreground/60 ">
        <li className="hover:text-foreground/100 ">
          <Link href="/discover">Discover</Link>
        </li>
        <li className="hover:text-foreground/100 ">
          <Link href="/"> Create Courses</Link>
        </li>
        <li className="hover:text-foreground/100 ">
          <Link href="/">Help</Link>
        </li>
        <li className=" ">
          {status === "loading" && (
            <Skeleton className="w-[100px] h-[50px] rounded-md" />
          )}
          {status === "unauthenticated" && (
            <div>
              <Button variant="default" onClick={() => signIn()}>
                Login
              </Button>
            </div>
          )}
          {status === "authenticated" && <ProfileDropdown data={data} />}
        </li>
        <li className="hover:text-foreground/100 ">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

const ProfileDropdown = ({ data }: { data: Session }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="border rounded-md flex p-2 items-center gap-4 hover:cursor-pointer hover:bg-secondary hover:text-foreground/100">
          <img
            className="h-8 w-8 rounded-full"
            src={String(data.user?.image)}
            alt={String(data.user?.name)}
            referrerPolicy="no-referrer"
          />
          {data.user?.name}
          {/* */}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="p-2 my-2 rounded-md border min-w-[9rem]"
        align="start"
      >
        <DropdownMenuItem className="p-2 rounded-md hover:cursor-pointer hover:bg-secondary w-full hover:text-foreground/100">
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem
          className="p-2 rounded-md hover:cursor-pointer hover:bg-secondary w-full hover:text-foreground/100"
          onClick={() => signOut()}
        >
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
