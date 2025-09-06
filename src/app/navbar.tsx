import Link from "next/link";

export default function Navbar({
  count,
  setCount,
}: {
  count: number;
  setCount: (count: number) => void;
}) {
  return (
    <div className="flex bg-sky-500 px-5 py-2 justify-between ">
      <div className="flex">
        <h1 className="text-2xl px-6 py-1 text-white">Navbar</h1>
        <ul className="flex gap-5 py-2.5">
          <Link href="/" className="text-blue-900 cursor-pointer ">
            <li>Home</li>
          </Link>
          <Link href="/about" className="text-blue-900  cursor-pointer ">
            <li>About</li>
          </Link>
          <Link href="/profile" className="text-blue-900  cursor-pointer ">
            <li>Profile</li>
          </Link>
        </ul>
      </div>
      <div className="flex">
        <button
          className="px-4 py-3 bg-sky-700 absolute top-2 right-32 rounded-lg text-white text-sm"
          onClick={() => setCount(count + 1)}
        >
          Layout : {count}
        </button>
      </div>
    </div>
  );
}
