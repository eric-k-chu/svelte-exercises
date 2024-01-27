<script lang="ts">
  const exampleList = Array.from({ length: 50 }).map(() => "List Item");
</script>

<div class="bg-transparent p-4">
  {#each exampleList as item}
    <h1>{item}</h1>
  {/each}
</div>
