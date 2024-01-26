<script lang="ts">
  import type { Comment } from "../lib/types";
  import { JSONPLACEHOLDER } from "../lib/constants";

  let commentsPromise = fetchComments();

  async function fetchComments(): Promise<Comment[]> {
    const res = await fetch(`${JSONPLACEHOLDER}/comments`);
    if (!res.ok) throw new Error(`Fetch Error: ${res.status}`);
    return await res.json();
  }
</script>

{#await commentsPromise}
  <p>Loading...</p>
{:then comments}
  <div class="w-full">
    {#each comments as comment}
      <div class="flex flex-col">
        <h2 class="font-semibold">
          User: <span class="font-light text-orange-500">{comment.email}</span>
        </h2>
        <p class="indent-2 font-light">{comment.body}</p>
      </div>
    {/each}
  </div>
{:catch error}
  <p class="text-red-500">
    {error instanceof Error ? error.message : "An unexpected error has occured"}
  </p>
{/await}
