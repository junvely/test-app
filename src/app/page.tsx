import { getPost } from "../service/postApi";

export default async function Page() {
  const data = await getPost();
  return (
    <div>
      <h1>HELLOOOOO!!!!</h1>
      {data?.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
