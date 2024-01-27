<script lang="ts">
  import Main from "./components/Main.svelte";
  import Header from "./components/Header.svelte";
  import Sidebar from "./components/Sidebar.svelte";
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>

<main class="flex h-screen overflow-hidden">
  <Sidebar />
  <div
    class="relative flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden"
  >
    <Header />
    <Main />
  </div>
</main>
