import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const res = NextResponse;
  const accessToken = req.cookies.get("access-token");
  if (!accessToken?.value) return res.redirect(new URL("/login", req.url));
  return res.next();
}
export const config = {
  matcher: "/((?!login|static|.*\\..*|_next).*)",
};
