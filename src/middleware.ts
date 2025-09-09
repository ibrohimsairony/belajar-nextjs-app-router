import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function Middleware(req: NextRequest) {
  const isLogin = true;
  if (!isLogin) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
