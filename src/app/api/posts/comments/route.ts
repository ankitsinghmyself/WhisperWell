import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { postId, content } = await req.json();
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";


  if (!postId || !content) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Check if same IP commented in last 10 minutes
  const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);

  const recentComment = await prisma.comment.findFirst({
    where: {
      ipAddress: ip,
      createdAt: { gte: tenMinutesAgo },
    },
    orderBy: { createdAt: "desc" },
  });

  if (recentComment) {
    return NextResponse.json(
      { error: "You can comment again after 10 minutes." },
      { status: 429 }
    );
  }

  const comment = await prisma.comment.create({
    data: {
      postId,
      content,
      ipAddress: ip,
    },
  });

  return NextResponse.json(comment, { status: 201 });
}
