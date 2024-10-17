import { loadSync } from "@std/dotenv";
const conf = loadSync();

const API_KEY = conf.API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const searchParams = new URLSearchParams(url.searchParams);
  searchParams.set("api_key", API_KEY);

  const targetUrl = `${BASE_URL + url.pathname}?${searchParams}`;
  console.log(targetUrl);

  // Forward the request to the target server
  const response = await fetch(targetUrl, {
    method: req.method,
    headers: req.headers,
    body: req.body,
  });

  // Relay the response from the target server back to the client
  return new Response(response.body, {
    status: response.status,
    headers: response.headers,
  });
}

Deno.serve(handler);
