"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function Layout({
  children,
  products,
  analitics,
}: {
  children: ReactNode;
  products: ReactNode;
  analitics: ReactNode;
}) {
  const { data: session, status }: { data: any; status: string } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      push("/");
    }
    if (status !== "loading" && session?.user.role !== "admin") {
      push("/");
    }
  }, [status, session]);

  return (
    <div className="p-5">
      <div>{children}</div>
      <div className="mt-5 flex justify-between gap-5">
        {analitics} {products}
      </div>
    </div>
  );
}
