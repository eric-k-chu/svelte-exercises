<script lang="ts">
  import type { Album } from "../lib/types";
  import { JSONPLACEHOLDER } from "../lib/constants";

  let albumsPromise = fetchAlbums();

  async function fetchAlbums(): Promise<Album[]> {
    const res = await fetch(`${JSONPLACEHOLDER}/albums`);
    if (!res.ok) throw new Error(`Fetch Error: ${res.status}`);
    return await res.json();
  }
</script>

{#await albumsPromise}
  <p>Loading...</p>
{:then albums}
  <div class="w-full">
    {#each albums as album}
      <h2 class="font-semibold">
        Album Title: <span class="font-light">{album.title}</span>
      </h2>
    {/each}
  </div>
{:catch error}
  <p class="text-red-500">
    {error instanceof Error ? error.message : "An unexpected error has occured"}
  </p>
{/await}
