<script lang="ts">
  import type { JsonURL } from "../lib/types";
  import Albums from "./Albums.svelte";
  import Comments from "./Comments.svelte";
  import Photos from "./Photos.svelte";
  import Posts from "./Posts.svelte";
  import Todos from "./Todos.svelte";

  let selected: JsonURL | "" = "";

  const fetchJsonDataButtons: JsonURL[] = [
    "albums",
    "comments",
    "photos",
    "posts",
    "todos",
    "users",
  ];
</script>

<div class="flex items-center gap-4">
  {#each fetchJsonDataButtons as button}
    <button
      class={`rounded-md bg-neutral-700 px-2 py-1 capitalize hover:bg-neutral-600 ${selected === button ? "text-blue-400" : "text-neutral-500"}`}
      on:click={() => (selected = button)}
    >
      {`${button}`}
    </button>
  {/each}
</div>

{#if selected === ""}
  <div>
    <h1>Click on a button to get data</h1>
  </div>
{/if}

{#if selected === "albums"}
  <Albums />
{/if}

{#if selected === "comments"}
  <Comments />
{/if}

{#if selected === "photos"}
  <Photos />
{/if}

{#if selected === "posts"}
  <Posts />
{/if}

{#if selected === "todos"}
  <Todos />
{/if}

{#if selected === "users"}
  <div>
    <h1>users</h1>
  </div>
{/if}
