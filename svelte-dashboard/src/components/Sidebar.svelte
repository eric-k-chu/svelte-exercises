<script lang="ts">
  const exampleNav = Array.from({ length: 50 }).map(() => "Navigate");
</script>

<aside
  class="h-screen w-[300px] overflow-y-auto overflow-x-hidden bg-zinc-800 p-4"
>
  <h1 class="text-3xl font-semibold">Sidebar</h1>
  {#each exampleNav as navItem}
    <h2 class="py-4 hover:bg-zinc-700">{navItem}</h2>
  {/each}
</aside>

<style>
  aside {
    scrollbar-width: none;
  }
</style>
