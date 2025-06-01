import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const ipAddress = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";


    // Fetch last post from this IP
    const lastPost = await prisma.post.findFirst({
      where: { ipAddress },
      orderBy: { createdAt: "desc" },
    });

    if (lastPost) {
      const TEN_MINUTES = 10 * 60 * 1000; // ms
      const now = Date.now();
      const lastPostTime = lastPost.createdAt.getTime();

      if (now - lastPostTime < TEN_MINUTES) {
        return new Response(
          JSON.stringify({
            error: "You can only post once every 10 minutes from the same IP.",
          }),
          { status: 429, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // Parse request body
    const body = await req.json();

    // Create new post
    const post = await prisma.post.create({
      data: {
        content: body.content,
        category: body.category,
        tags: body.tags,
        allowComments: body.allowComments ?? false,
        ipAddress,
      },
    });

    return new Response(
      JSON.stringify({ success: true, post }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error creating post:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
