import Link from "next/link";
import React from "react";

async function fetchData() {
  let data = await fetch("http://localhost:3000/api/users/");
  data = await data.json();
  return data;
}

export default async function GetApiIntePage() {
  const users = await fetchData();
  console.log(users);

  return (
    <div>
      Get Api Inte Page
      {users.map((item) => (
        <div key={item.id}>
          <Link href={`user/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </div>
  );
}
