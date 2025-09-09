"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");

  const revalidate = async () => {
    const response = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=12345",
      {
        method: "POST",
      }
    );
    if (!response.ok) setStatus("Revalidate Failed");

    const res = await response.json();

    if (res.revalidate) setStatus("Revalidate Success");
  };
  return (
    <div>
      <p>{status}</p>
      <button
        className="cursor-pointer py-2 px-3 bg-blue-400 rounded-lg m-5"
        onClick={revalidate}
      >
        Revalidate
      </button>
    </div>
  );
}
