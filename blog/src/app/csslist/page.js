"use client";

import { useState } from "react";
import outside from "../../style/outside.module.css";

export default function CSSListPage() {
  const [h3color, setH3color] = useState({ backgroundColor: "yellow" });
  const [textcolor, setTextcolor] = useState("blue");

  return (
    <div>
      <h1>CSS List Page</h1> {/*It has an gobal css*/}
      <h2 style={{ color: "white", backgroundColor: "black", padding: 10 }}>
        CSS List Page
      </h2>{" "}
      {/*Inline css*/}
      <h3 className="p-3 text-dark" style={h3color}>
        CSS List page
      </h3>
      {/*Chaning the background color on click event*/}
      <button onClick={() => setH3color({ backgroundColor: "red" })}>
        Click Me to Change
      </button>
      {/* css module code */}
      <div className={outside.main}>
        <h1>CSS Module</h1>
        <p>This is a paragraph inside a CSS Module styled div.</p>
      </div>
      
    </div>
  );
}
