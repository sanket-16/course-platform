import { PrismaClient } from "@prisma/client";


const CoursePage = async({ params }: { params: { id: string }}) => {

  const prisma = new PrismaClient();
  console.log("control reached");
  console.log(params.id);

  const course = await prisma.course.findUnique({
    where: { id: params.id },
    include: {
      author: { select: { name: true, id: true } },
      Review: true,
      _count: { select: { purchasedBy: true, Review: true } },
    },
  });

  console.log(course);

  return (
    <div className="px-12">
      <div className="grid md:grid-cols-2 grid-cols-2">
        <img
          src={course?.image}
          alt="course image"
          referrerPolicy="no-referrer"
          className="rounded-md "
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">{course?.title}</h3>
          <div>
            <p className="font-bold text-foreground/60">
              Created by {course?.author.name}
            </p>
          </div>
        </div>
      </div>
      <div className="py-10">{course?.description}</div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
          <h4 className="font-bold text-lg">Course Content</h4>
        </div>
        <div>
          <h4 className="font-bold text-lg">Reviews</h4>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
