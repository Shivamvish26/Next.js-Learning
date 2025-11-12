import { NextResponse } from "next/server";

export async function GET(req, content) {
  const studentdeatils = content.params.students;
  console.log(studentdeatils);
  return NextResponse.json({ result: studentdeatils }, { status: 200 });
}
