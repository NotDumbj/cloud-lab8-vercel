export const runtime = "edge";
import { NextRequest, NextResponse } from "next/server";
import { geolocation } from "@vercel/functions";

export async function GET(req: NextRequest) {
  const geo = geolocation(req);
  return NextResponse.json({
    country: geo?.country || "Only available on production",
    city: geo?.city || "Test on your deployed URL",
    runtime: "edge",
  });
}