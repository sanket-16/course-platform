import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";

const Discover = () => {
  return (
    <div className="px-12">
      <div className="w-full flex justify-between items-center">
        <h3 className="font-bold text-xl">Courses</h3>
        <div className="flex gap-4 items-center">
          <Input />
          <Button>Filters</Button>
        </div>
      </div>
      <div className="w-full grid md:grid-cols-3 grid-cols-1 p-4">
        <Link href="/discover/id">
          <Card className="hover:bg-secondary group transition-all">
            <CardHeader>
              <img
                src="https://ccweb.imgix.net/https%3A%2F%2Fimg.youtube.com%2Fvi%2FEfAl9bwzVZk%2Fhqdefault.jpg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=9f36f80c3051494e161b7bf24f6bf4dd"
                alt="course image"
                referrerPolicy="no-referrer"
                className="rounded-md pb-4 group-hover:opacity-80"
              />
              <CardTitle className="group-hover:text-primary">
                Web Developement with Next.js
              </CardTitle>
              <CardDescription>Sanket Patil</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-justify group-hover:text-foreground/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud.
              </p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </CardFooter>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Discover;
