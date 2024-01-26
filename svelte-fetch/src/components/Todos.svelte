<script lang="ts">
  import type { Todo } from "../lib/types";
  import { JSONPLACEHOLDER } from "../lib/constants";

  let todosPromise = fetchTodos();

  async function fetchTodos(): Promise<Todo[]> {
    const res = await fetch(`${JSONPLACEHOLDER}/todos`);
    if (!res.ok) throw new Error(`Fetch Error: ${res.status}`);
    return await res.json();
  }
</script>

{#await todosPromise}
  <p>Loading...</p>
{:then todos}
  <div class="w-full space-y-6">
    {#each todos as todo}
      <div class="space-y-2">
        <h2 class="font-semibold">
          Todo:
          <span class="font-light text-orange-500">{todo.title}</span>
        </h2>
        <h2 class="font-semibold">
          User:
          <span class="font-light text-orange-500">{todo.userId}</span>
        </h2>
        <h2 class="font-semibold">
          Completed:
          <span
            class={`font-light ${todo.completed ? "text-green-600" : "text-red-600"}`}
            >{todo.completed ? "Yes" : "No"}</span
          >
        </h2>
      </div>
    {/each}
  </div>
{:catch error}
  <p class="text-red-500">
    {error instanceof Error ? error.message : "An unexpected error has occured"}
  </p>
{/await}
