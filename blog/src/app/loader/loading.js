"use client";
import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        height: "100vh",
        backgroundColor: "#fff",
        flexDirection: "column",
      }}
    >
      <RotatingLines
        strokeColor="#4fa94d"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />

      <p style={{ marginTop: "10px", color: "#4fa94d" }}>Loading...</p>
    </div>
  );
}
