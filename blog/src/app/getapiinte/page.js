import DeleteUser from "@/util/DeleteUser";
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
        <div className="" key={item.id}>
          <Link className="p-5" href={`user/${item.id}`}>
            {item.name}
          </Link>
          <Link className="" href={`user/${item.id}/update`}>
            Edit
          </Link>
          <DeleteUser id={item.id} />
        </div>
      ))}
    </div>
  );
}
