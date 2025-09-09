import { register } from "@/lib/firebase/service";

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  const res = await register(body);
  return Response.json(
    { status: res.status, message: res.message },
    { status: res.statusCode }
  );
}
