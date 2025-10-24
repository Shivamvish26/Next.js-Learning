"use client";
import Link from "next/link";

export default function StudentList() {
  const studentlist = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" },
  ];
  return (
    <div>
      <h1>Student List Page</h1>
      <ul>
        {studentlist.map((student, index) => (
          <li key={index}>
            <Link href={`/studentlist/${student.name}`}>{student.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
