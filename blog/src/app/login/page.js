"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const navigate = (page) => {
    router.push("/login" + page);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <button
          style={{ padding: 10, cursor: "pointer" }}
          onClick={() => navigate("/studentlogin")}
        >
          Click Here to go at Student Login Page
        </button>
        <button
          style={{ padding: 10, cursor: "pointer" }}
          onClick={() => navigate("/teacherlogin")}
        >
          Click Here to go at Teacher Login Page
        </button>
      </div>
    </div>
  );
}
