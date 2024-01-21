'use client';
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
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Course } from "@prisma/client";
import { range } from "@/lib/utils";
type ExtendedCourse = Course&{
  author:{name:string}

}
const getCourses = async() : Promise<{courses:ExtendedCourse[]}> =>{
  const response = await fetch("/api/course")
  const data = await response.json()
  return data;
}


  


const Discover = () => {

  

  
  const {data, status} = useQuery({ queryKey: ['courses'], queryFn: getCourses })

  
  
  
  return (
    <div className="px-12">
      <div className="w-full flex justify-between items-center">
        <h3 className="font-bold text-xl">Courses</h3>
        <div className="flex gap-4 items-center">
          <Input placeholder="Search..." />
          <Button>Filters</Button>
        </div>
      </div>
      <div className="gap-4 w-full grid md:grid-cols-3 grid-cols-1 p-4" >
        
      
        
              {data?.courses.map((course)=>(
                
                
                
                <Link href= {`/discover/${course.id}`} key={course.id}>
                <Card className="hover:bg-secondary group transition-all" >
                <CardHeader>
                  <img
                  
                    src= {course.image}
                    alt="course image"
                    referrerPolicy="no-referrer"
                    className="rounded-md pb-4 group-hover:opacity-80"
                  />
                  <CardTitle className="group-hover:text-primary">
                     {course.title}
                    </CardTitle>
                    <CardDescription>{course.author.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-justify group-hover:text-foreground/80">
                      {course.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex gap-4">
                    {range(0, Math.floor(course.averageRating)).map((count)=>(
                      <Star key={count} fill="#F0DD0B" stroke="transparent" size={30}/>
                    ))}
                    
                  </CardFooter>
                </Card>
              </Link>
              

              ))}
              
      </div>
      
    </div>
  );
};

export default Discover;
