import { revalidateTag } from "next/cache";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);

  const tag = searchParams.get("tag");
  const secret = searchParams.get("secret");

  if (!tag || !secret)
    return Response.json(
      { status: 400, message: "Missing Tag or secret Params" },
      { status: 400 }
    );
  if (secret !== process.env.REVALIDATE_SECRET)
    return Response.json(
      { status: 401, message: "Invalidate Secret" },
      { status: 401 }
    );

  revalidateTag(tag);

  return Response.json(
    {
      revalidate: true,
      now: Date.now(),
    },
    { status: 200 }
  );
}
