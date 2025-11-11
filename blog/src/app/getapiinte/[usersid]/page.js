import React from "react";

async function getUser(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data.result;
}

export default async function UserIdPage({ params }) {
  const user = await getUser(params.userid);
  //   console.log(user);
  return (
    <div>
      <p>User Deatils Page</p>
      <h4>{user.name}</h4>
      <h4>{user.age}</h4>
      <h4>{user.email}</h4>
    </div>
  );
}
