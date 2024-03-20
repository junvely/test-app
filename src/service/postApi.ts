export async function getPost() {
  try {
    const res = await fetch(`${process.env.SERVER_URL}/api/test`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });
    const { data } = await res.json();
    return data;
  } catch (e) {
    throw new Error("에러임ㅋㅋ");
  }
}
