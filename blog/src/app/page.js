"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  // Hooks
  const [name, setName] = useState("Yadhav");
  const [count, setCount] = useState(0);

  {
    /* Parameter in a function */
  }
  const Suraname = () => {
    // setName("Vishwakarma");
    setCount(count + 1);
  };
  const apple = (item) => alert(item);

  // How to make a component in component
  const InnerComp = () => {
    return (
      <>
        <h3>Inner Function</h3>
      </>
    );
  };

  return (
    <div className={styles.page}>
      {/* <BlogPost name={"Shubham"} /> */}
      <h1>Welcome to My Blog Page</h1>
      <h2>Total Count {count}</h2>
      <button onClick={() => apple("Welcome to the course of Next Js")}>
        Click Me
      </button>
      {/* message passed for the item as "Welcomr to the....." */}
      <button onClick={Suraname}>Increment the Value</button>
      {/* <InnerComp/> */}
      {InnerComp()}
      {/*we can call the inner comp as an function also  */}
    </div>
  );
}

// const BlogPost = (props) => {
//   return (
//     <div>
//       <h2>Hello my self {props.name} Vishwakarma</h2>
//     </div>
//   );
// };
