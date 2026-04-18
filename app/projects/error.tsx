"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "16px",
      fontFamily: "sans-serif"
    }}>
      <h2 style={{ fontSize: "20px", fontWeight: 600 }}>
        Something went wrong
      </h2>
      <p style={{ fontSize: "14px", color: "#666" }}>
        {error.message}
      </p>
      <button
        onClick={reset}
        style={{
          padding: "8px 16px",
          background: "#00B89A",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
        Try again
      </button>
    </div>
  );
}
