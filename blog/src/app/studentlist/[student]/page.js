"use client";

export default function DynamicStudents({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Dynamic Students Lists</h1>
      <h3>Name:{params}</h3>
    </div>
  );
}
