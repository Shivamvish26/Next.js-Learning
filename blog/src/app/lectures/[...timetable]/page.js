"use client";
// segmented URL example: /lectures/john/doe
export default function TimetablePage({ params }) {
  console.log(params);
  return (
    <div>
      <h1>Time Table Page</h1>
      <h2>Name: {params.timetable[0]}</h2>
      <h2>Surname: {params.timetable[1]}</h2>
    </div>  
  );
}
