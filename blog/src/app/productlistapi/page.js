"use client";
import React, { useEffect, useState } from "react";

export default function ProductlistApiPage() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setdata(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-center position-sticky">Product List API Page</h1>
      {data.map((item) => {
        return (
          <div key={item.id} className="border p-4 m-4">
            <p className="font-bold">{item.id}</p>
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.body}</p>
          </div>
        );
      })}
    </div>
  );
}
