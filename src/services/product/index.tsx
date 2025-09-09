export default async function getData(url: string) {
  // const res = await fetch("https://fakestoreapi.com/products");
  const res = await fetch(url, {
    cache: "force-cache",
    next: {
      tags: ["products"],
      // revalidate: 3600 * 360,
    },
  });

  if (!res.ok) throw Error("Failed to fetch data");

  return res.json();
}
