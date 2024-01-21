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
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const { data, status } = useSession();
  console.log(data);
  return (
    <>
      {/* desktop nav */}
      <nav className="md:flex justify-between items-center p-8 hidden">
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
      {/* mobile nav */}
      <nav className="md:hidden flex">
        <Drawer>
          <DrawerTrigger className="w-full">
            <div className="flex justify-between p-8 w-full items-center">
              <Link href="/" className="text-2xl font-bold">
                Course.io
              </Link>
              <p>
                <Menu size={40} />
              </p>
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <ul className="flex flex-col gap-8 p-8 items-center text-foreground/60 ">
              <li className="hover:text-foreground/100 hover:bg-muted w-full p-4 rounded-md">
                <Link href="/discover">Discover</Link>
              </li>
              <li className="hover:text-foreground/100 hover:bg-muted w-full p-4 rounded-md">
                <Link href="/"> Create Courses</Link>
              </li>
              <li className="hover:text-foreground/100 hover:bg-muted w-full p-4 rounded-md">
                <Link href="/">Help</Link>
              </li>

              <Separator />
              <li className="w-full">
                {status === "loading" && (
                  <>
                    <Skeleton className="w-[100px] h-[50px] rounded-md md:block hidden" />
                    <Skeleton className="w-full h-[50px] rounded-md md:block hidden" />
                  </>
                )}
                {status === "unauthenticated" && (
                  <div>
                    <Button
                      variant="default"
                      onClick={() => signIn()}
                      className="w-full"
                    >
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
          </DrawerContent>
        </Drawer>
      </nav>
    </>
  );
};

export default Navbar;

const ProfileDropdown = ({ data }: { data: Session }) => {
  return (
    <>
      <div className="hidden md:block">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="  border rounded-md flex p-2 items-center gap-4 hover:cursor-pointer hover:bg-secondary hover:text-foreground/100">
              <img
                className="h-8 w-8 rounded-full"
                src={String(data.user?.image)}
                alt={String(data.user?.name)}
                referrerPolicy="no-referrer"
              />
              {data.user?.name}
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
      </div>
      <div className="md:hidden flex flex-col gap-8 w-full justify-start">
        <Link
          href="/profile"
          className="hover:text-foreground/100 hover:bg-muted p-4 rounded-md w-full flex gap-4 items-center"
        >
          <img
            className="h-8 w-8 rounded-full"
            src={String(data.user?.image)}
            alt={String(data.user?.name)}
            referrerPolicy="no-referrer"
          />
          {data.user?.name}
        </Link>
        <p
          className="hover:text-red-200 hover:bg-red-500/50 p-4 rounded-md w-full"
          onClick={() => signOut()}
        >
          Logout
        </p>
      </div>
    </>
  );
};
