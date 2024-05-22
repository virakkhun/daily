export async function GET(req: Request) {
  const lat = req.headers.get("x-vercel-ip-latitude") || 11.568042;
  const lon = req.headers.get("x-vercel-ip-longitude") || 104.910841;
  const q = `?lat=${lat}&lon=${lon}`;
  const url = "https://worker-broken-bird-bb78.rakmanoban.workers.dev/weather";
  const res = await fetch(`${url}${q}`);
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
