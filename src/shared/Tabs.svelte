<script>
  import { createEventDispatcher } from "svelte";

  export let tabs;
  export let activeTab;

  const dispatch = createEventDispatcher();
</script>

<nav class="tabs">
  <ul>
    {#each tabs as tab}
      <li
        class:active={tab === activeTab}
        on:click={() => dispatch("tabChange", tab)}
        on:keydown
      >
        {tab}
      </li>
    {/each}
  </ul>
</nav>

<style>
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    list-style: none;
    padding: 0;
  }
  li:hover {
    cursor: pointer;
    color: #009fe4;
  }

  li.active {
    color: #009fe4;
    padding-bottom: 5px;
    border-bottom: 3px solid #009fe4;
  }
</style>
