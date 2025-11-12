"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const id = params.userId;

  console.log(id);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    getuserdetails();
  }, []);

  const getuserdetails = async () => {
    let data = await fetch(`http://localhost:3000/api/users/` + id);
    data = await data.json();
    setName(data.result.name);
    setEmail(data.result.email);
    setAge(data.result.age);
  };

  const updateUser = async () => {
    let result = await fetch(`http://localhost:3000/api/users/` + id, {
      method: "PUT",
      body: JSON.stringify({ name, email, age }),
    });
    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("User Info Updated");
    } else {
      alert("Enter Valid input");
    }
  };

  return (
    <div>
      Update Detail Page for User ID: {id}
      <div>
        <input
          type="text"
          className="input-field"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={updateUser} className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}
