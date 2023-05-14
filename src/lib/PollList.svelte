<script>
  import Card from "../shared/Card.svelte";
  import PollDetails from "./PollDetails.svelte";
  import PollStore from "../stores/PollStore";
  import { flip } from "svelte/animate";
  import { fade, scale } from "svelte/transition";
</script>

<h2>Current Polls</h2>
<div class="polls">
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:scale|local animate:flip={{ duration: 500 }}>
      <Card>
        <PollDetails {poll} />
      </Card>
    </div>
  {/each}
</div>

<style>
  .polls {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
  h2 {
    padding-top: 40px;
    text-align: center;
    color: #313131;
  }
</style>
