<script lang="ts">
  import type { Photo } from "../lib/types";
  import { JSONPLACEHOLDER } from "../lib/constants";

  let photosPromise = fetchPhotos();

  async function fetchPhotos(): Promise<Photo[]> {
    const res = await fetch(`${JSONPLACEHOLDER}/photos`);
    if (!res.ok) throw new Error(`Fetch Error: ${res.status}`);
    return await res.json();
  }
</script>

{#await photosPromise}
  <p>Loading...</p>
{:then photos}
  <div class="w-full space-y-6">
    {#each photos as photo}
      <div class="flex items-center gap-x-2">
        <img
          src={photo.thumbnailUrl}
          alt={`${photo.title} thumbnail`}
          class="size-10 rounded-sm"
        />
        <h2 class="font-semibold">
          Title: <span class="font-light text-orange-500">{photo.title}</span>
        </h2>
      </div>
    {/each}
  </div>
{:catch error}
  <p class="text-red-500">
    {error instanceof Error ? error.message : "An unexpected error has occured"}
  </p>
{/await}
