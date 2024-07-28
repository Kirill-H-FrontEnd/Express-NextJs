import { pagesData } from "@/data/dataItems";

export async function GET(request) {
  return new Response(JSON.stringify(pagesData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
