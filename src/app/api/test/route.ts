import prisma from "../../../lib/prisma";

export async function GET(request: Request) {
  try {
    const data = await prisma.post.findMany(); // user의 모든 결과 가져오기
    return Response.json({ data }, { status: 200 });
  } catch (e) {
    console.log("test api 데이터 전송 실패");
  }
}
