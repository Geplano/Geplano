import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  const secret = process.env.REVALIDATE_SECRET;
  const body = await req.json();
  if (!body?.token || body.token !== secret) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const path = body.path || "/";
  try {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json(
      { revalidated: false, error: String(err) },
      { status: 500 },
    );
  }
}
