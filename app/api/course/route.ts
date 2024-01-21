import { Prisma, PrismaClient } from "@prisma/client";

export const GET = async () => {
  const prisma = new PrismaClient();
  console.log("control reached");
  const courses = await prisma.course.findMany({
    include: {
      author: { select: { name: true, id: true } },
    },
  });

  console.log(courses);
  return Response.json({ courses });
};
