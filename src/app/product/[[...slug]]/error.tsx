"use client";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h2>Something when Wrong!</h2>
      <button onClick={() => reset()}> try Again</button>
    </div>
  );
}
