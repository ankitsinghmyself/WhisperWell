import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { whisperId, liked } = await req.json();

    if (!whisperId || liked === undefined) {
      return NextResponse.json({ message: "Invalid request" }, { status: 400 });
    }

    const update = await prisma.post.update({
      where: { id: whisperId },
      data: {
        likes: liked ? { decrement: 1 } : { increment: 1 },
      },
    });

    return NextResponse.json({
      newLikeCount: update.likes,
      liked: !liked,
    });
  } catch (err) {
    console.error("Like toggle failed:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
