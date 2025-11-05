"use client";

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
      <p style={{ marginTop: "10px", color: "#4fa94d" }}>Loading...</p>
    </div>
  );
}
