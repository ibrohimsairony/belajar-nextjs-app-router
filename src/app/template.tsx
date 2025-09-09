"use client";
import { disabledNavbar } from "@/config/disableNavbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { useState } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const pathname = usePathname();
  return (
    <>
      {!disabledNavbar.includes(pathname) ? (
        <div>
          <div className="absolute top-2 right-2">
            <button
              className="px-4 py-3 bg-sky-700 rounded-lg text-white text-sm"
              onClick={() => setCount(count + 1)}
            >
              Template : {count}
            </button>
          </div>
          {children}
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
}
