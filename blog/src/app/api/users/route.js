import { users } from "@/util/db";
import { NextResponse } from "next/server";

// export function GET(requset) {
//   return NextResponse.json({
//     name: "Shubam",
//     age: "28",
//     city: "pune",
//   },{status:200});
// }

// GET API
export function GET() {
  const data = users;
  return NextResponse.json(data, { status: 200 });
}

// POST API
export async function POST(req, resp) {
  let payload = await req.json();
  // console.log(payload.name);
  // line 23 is condition for what we are passing in the json body
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Required fields are not found", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { result: "New User Created", success: true },
    { status: 201 }
  );
}
