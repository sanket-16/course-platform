import { Prisma, PrismaClient } from "@prisma/client";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const prisma = new PrismaClient();
  console.log("control reached");
  console.log(params.id);

  const courses = await prisma.course.findUnique({
    where: { id: params.id },
    include: {
      author: { select: { name: true, id: true } },
      Review: true,
      _count: { select: { purchasedBy: true, Review: true } },
    },
  });

  console.log(courses);
  return Response.json({ courses });
};
