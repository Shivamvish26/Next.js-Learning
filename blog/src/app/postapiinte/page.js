"use client";
import React, { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleformsubmit = async (e) => {
    e.preventDefault();
    let data = await fetch("http://localhost:3000/api/users/", {
      method: "POST",
      body: JSON.stringify({ name, email, age }),
    });
    data = await data.json();
    if (data.success) {
      alert("New User Created");
    } else {
      alert("Some error with data please check and Try Again!!");
    }
    console.log(data);
  };

  return (
    <div className="add-user">
      <h2>ADD NEW USER</h2>
      <form onSubmit={handleformsubmit}>
        <input
          className="input-field"
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary  m-2">
          Add User
        </button>
      </form>
    </div>
  );
}
