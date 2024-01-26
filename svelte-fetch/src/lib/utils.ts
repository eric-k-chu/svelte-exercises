import type { JsonURL } from "./types";

export async function getJsonData<T>(slug: JsonURL): Promise<T> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${slug}`);
  if (!res.ok) throw new Error(`Fetch Error ${res.status}`);
  return (await res.json()) as T;
}
