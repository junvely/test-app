export default async function Page() {
  console.log(process.env.SERVER_URL);
  const res = await fetch(`${process.env.SERVER_URL}/api/test`, {
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  });
  const { data } = await res.json();
  console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
  console.log(data);
  return (
    <div>
      <h1>HELLOOOOO!!!!</h1>
      {data.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
