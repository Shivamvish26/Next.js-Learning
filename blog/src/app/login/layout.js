"use client";

import Link from "next/link";
import "./login.css";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  console.log("Current Pathname:", pathName);

  return (
    <div>
      <h1>Common Layout for the login screen</h1>

      {pathName === "/login/teacherlogin" ? (
        <Link href="/login">Go to main login page</Link>
      ) : (
        <ul className="login-navigation">
          <li>Blogs Link</li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/studentlogin">Student Login</Link>
          </li>
          <li>
            <Link href="/login/teacherlogin">Teacher Login</Link>
          </li>
        </ul>
      )}

      {children}
    </div>
  );
}
