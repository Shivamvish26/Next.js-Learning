import { users } from "@/util/db";
import { NextResponse } from "next/server";

export function GET(req, content) {
  //   console.log(content.params.id);
  //   const data = users;

  const userData = users.filter((item) => item.id == content.params.id);

  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", success: false }
      : { result: userData, success: true },
    { status: 200 }
  );
}

// while updating the data we should write a update code in dynamic folder to update with id field.
// PUT API
export async function PUT(req, content) {
  let payload = await req.json();
  payload.id = content.params.id;
  console.log(payload);
  if (!payload.name || !payload.age || !payload.email) {
    return NextResponse.json(
      { result: "Request Response is not vald", success: false },
      { status: 400 }
    );
  }
  return NextResponse.json({ result: payload, success: true }, { status: 200 });
}

// DELETE API
export function DELETE(req, content) {
  let id = content.params.id;
  if (id) {
    return NextResponse.json(
      { result: "User Deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Internal errpr, Please try again", success: false },
      { status: 500 }
    );
  }
}
