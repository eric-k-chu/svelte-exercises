<script lang="ts">
  import type { JsonURL } from "../lib/types";

  let selected: JsonURL | "" = "";
  let promise;

  const fetchJsonDataButtons: JsonURL[] = [
    "albums",
    "comments",
    "photos",
    "posts",
    "todos",
    "users",
  ];

  function handleClick(n: JsonURL): void {
    selected = n;
  }
</script>

<div class="flex items-center gap-4">
  {#each fetchJsonDataButtons as button}
    <button
      class={`rounded-md bg-neutral-700 px-2 py-1 capitalize hover:bg-neutral-600 ${selected === button ? "text-white" : "text-neutral-500"}`}
      on:click={() => handleClick(button)}
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
  <div>
    <h1>albums</h1>
  </div>
{/if}

{#if selected === "comments"}
  <div>
    <h1>comments</h1>
  </div>
{/if}

{#if selected === "photos"}
  <div>
    <h1>photos</h1>
  </div>
{/if}

{#if selected === "posts"}
  <div>
    <h1>posts</h1>
  </div>
{/if}

{#if selected === "todos"}
  <div>
    <h1>todos</h1>
  </div>
{/if}

{#if selected === "users"}
  <div>
    <h1>users</h1>
  </div>
{/if}
