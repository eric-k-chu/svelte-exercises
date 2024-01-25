<script lang="ts">
  let count = 0;

  function increment() { 
    count += 1;
  }

  function decrement() { 
    count -= 1;
  }

</script>

<main>
  <button on:click={decrement}>Down</button>
  <h1>{count}</h1>
  <button on:click={increment}>Up</button>
</main>

<style>
  main {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  button {
    border: none;
    padding: .5rem 2rem;
    height: fit-content;
    border-radius: 5px;
    cursor: pointer;
  }

</style>