import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ whisperId: string }> } // params is a Promise now
) {
  const params = await context.params;  // await params here
  const { whisperId } = params;

  if (!whisperId) {
    return NextResponse.json(
      { message: "Whisper ID is required" },
      { status: 400 }
    );
  }

  try {
    const confession = await prisma.post.findUnique({
      where: { id: whisperId },
      include: {
        comments: {
          orderBy: { createdAt: "desc" },
          select: {
            id: true,
            author: true,
            content: true,
            createdAt: true,
          },
        },
        _count: {
          select: { comments: true },
        },
      },
    });

    if (!confession) {
      return NextResponse.json(
        { message: "Confession/post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(confession);
  } catch (error) {
    console.error("Failed to fetch confession:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
