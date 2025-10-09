'use client'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <BlogPost name={"Shubham"} /> */}
      <h1>Welcome to My Blog Page</h1>
      <button onClick={() => alert("Hello Next.js")}>Click Me</button>
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
