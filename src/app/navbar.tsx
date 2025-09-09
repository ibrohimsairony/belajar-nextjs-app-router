import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar({
  count,
  setCount,
}: {
  count: number;
  setCount: (count: number) => void;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  console.log(status);
  return (
    <div className="flex bg-sky-500 px-5 py-2 justify-between ">
      <div className="flex">
        <h1 className="text-2xl px-6 py-1 text-white">Navbar</h1>
        <ul className="flex gap-5 py-2.5">
          <Link
            href="/"
            className={`${
              pathname === "/" ? "text-blue-900" : "text-white"
            } cursor-pointer `}
          >
            <li>Home</li>
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about" ? "text-blue-900" : "text-white"
            }  cursor-pointer `}
          >
            <li>About</li>
          </Link>
          <Link
            href="/profile"
            className={`${
              pathname === "/profile" ? "text-blue-900" : "text-white"
            }  cursor-pointer `}
          >
            <li>Profile</li>
          </Link>
          <Link
            href="/product"
            className={`${
              pathname.includes("/product") ? "text-blue-900" : "text-white"
            }  cursor-pointer `}
          >
            <li>Product</li>
          </Link>
        </ul>
      </div>
      <div className="flex absolute top-2 gap-3 right-32">
        <p>
          {status !== "unauthenticated" &&
            status !== "loading" &&
            session?.user?.name}
        </p>
        {status === "unauthenticated" ? (
          <button
            className="cursor-pointer px-4 py-3 bg-sky-700 rounded-lg text-white text-sm"
            onClick={() => signIn()}
          >
            Login
          </button>
        ) : status === "loading" ? (
          <button className="cursor-not-allowed px-4 py-3 bg-sky-700 rounded-lg text-white text-sm"></button>
        ) : (
          <button
            className="cursor-pointer px-4 py-3 bg-sky-700 rounded-lg text-white text-sm"
            onClick={() => signOut()}
          >
            LogOut
          </button>
        )}

        <button
          className="cursor-pointer px-4 py-3 bg-sky-700  rounded-lg text-white text-sm"
          onClick={() => setCount(count + 1)}
        >
          Layout : {count}
        </button>
      </div>
    </div>
  );
}
