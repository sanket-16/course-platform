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
import courses from "@/courses.json";

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
      <div className="w-full grid md:grid-cols-3 grid-cols-1 p-4" >
      
        
              {courses.map((course)=>(
                
                
                
                <Link href= {`/discover/id${course.id}`} key={course.id}>
                <Card className="hover:bg-secondary group transition-all" >
                <CardHeader>
                  <img
                  
                    src= {course.img}
                    alt="course image"
                    referrerPolicy="no-referrer"
                    className="rounded-md pb-4 group-hover:opacity-80"
                  />
                  <CardTitle className="group-hover:text-primary">
                     {course.title}
                    </CardTitle>
                    <CardDescription>{course.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-justify group-hover:text-foreground/80">
                      {course.description}
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
              

              ))}
              
      </div>
      
    </div>
  );
};

export default Discover;
