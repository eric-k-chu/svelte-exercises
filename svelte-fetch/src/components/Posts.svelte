<script lang="ts">
  import type { Post } from "../lib/types";
  import { JSONPLACEHOLDER } from "../lib/constants";

  let postsPromise = fetchPosts();

  async function fetchPosts(): Promise<Post[]> {
    const res = await fetch(`${JSONPLACEHOLDER}/posts`);
    if (!res.ok) throw new Error(`Fetch Error: ${res.status}`);
    return await res.json();
  }
</script>

{#await postsPromise}
  <p>Loading...</p>
{:then posts}
  <div class="w-full space-y-6">
    {#each posts as post}
      <div class="space-y-2">
        <h2 class="font-semibold">
          Title:
          <span class="font-light text-orange-500">{post.title}</span>
        </h2>
        <h2 class="font-semibold">
          User:
          <span class="font-light text-orange-500">{post.userId}</span>
        </h2>
        <p class="font-light">
          {post.body}
        </p>
      </div>
    {/each}
  </div>
{:catch error}
  <p class="text-red-500">
    {error instanceof Error ? error.message : "An unexpected error has occured"}
  </p>
{/await}
