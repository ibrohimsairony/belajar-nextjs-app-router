const fetchPosts = async () => {
  // Tunggu selama 2 detik untuk mensimulasikan loading dari API
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Kemudian kembalikan data
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
};
export default async function AboutPage() {
  const post = await fetchPosts();
  return <div>About Page</div>;
}
