import { NextResponse } from "next/server";

const SCHEDULING_URL = "https://calendly.com/alexis-soubran/contact";

export function GET() {
  return NextResponse.redirect(SCHEDULING_URL, 307);
}
