<script lang="ts">
  let count = 0;

  function manageCount(op: "+" | "-"): void {
    if (op === '+') count += 1;
    else count -=1;
  }
</script>

<main class="flex items-center justify-center min-h-screen gap-4">
  <button on:click={() => manageCount("-")} class="px-4 py-1 text-lg font-medium bg-neutral-700 rounded-md hover:bg-neutral-600">-</button>
  <h1 class="min-w-16 truncate text-center">{count}</h1>
  <button on:click={() => manageCount("+")} class="px-4 py-1 text-lg font-medium bg-neutral-700 rounded-md hover:bg-neutral-600">+</button>
</main>
