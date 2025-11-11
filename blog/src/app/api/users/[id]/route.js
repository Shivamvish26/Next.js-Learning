import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(req, context) {
  //   console.log(content.params.id);
  //   const data = users;

  const userData = users.filter((item) => item.id == context.params.id);

  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData, success: true },
    { status: 200 }
  );
}
