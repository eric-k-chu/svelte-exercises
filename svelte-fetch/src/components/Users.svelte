<script lang="ts">
  import type { User } from "../lib/types";
  import { JSONPLACEHOLDER } from "../lib/constants";

  let usersPromise = fetchUsers();

  async function fetchUsers(): Promise<User[]> {
    const res = await fetch(`${JSONPLACEHOLDER}/users`);
    if (!res.ok) throw new Error(`Fetch Error: ${res.status}`);
    return await res.json();
  }
</script>

{#await usersPromise}
  <p>Loading...</p>
{:then users}
  <div class="w-full space-y-6">
    {#each users as user}
      <div class="space-y-2">
        <h2 class="font-semibold">
          Username:
          <span class="font-light text-orange-500">{user.username}</span>
        </h2>
        <h2 class="font-semibold">
          Name:
          <span class="font-light text-orange-500">{user.name}</span>
        </h2>
        <h2 class="font-semibold">
          Email:
          <span class="font-light text-orange-500">{user.email}</span>
        </h2>
        <h2 class="font-semibold">
          Address:
          <span class="font-light text-orange-500"
            >{user.address.city}, {user.address.street}, {user.address.suite}, {user
              .address.zipcode}</span
          >
        </h2>
        <h2 class="font-semibold">
          Phone:
          <span class="font-light text-orange-500">{user.phone}</span>
        </h2>
      </div>
    {/each}
  </div>
{:catch error}
  <p class="text-red-500">
    {error instanceof Error ? error.message : "An unexpected error has occured"}
  </p>
{/await}
