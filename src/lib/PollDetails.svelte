<script>
  import Button from "../shared/Button.svelte";
  import PollStore from "../stores/PollStore";
  export let poll;
  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.round((poll.votesA / totalVotes) * 100);
  $: percentB = Math.round((poll.votesB / totalVotes) * 100);

  const handleVote = (answer, id) => {
    PollStore.update((polls) => {
      const poll = polls.find((poll) => poll.id === id);
      if (answer === "a") {
        poll.votesA++;
      }
      if (answer === "b") {
        poll.votesB++;
      }
      return polls;
    });
  };

  const handleDelete = (id) => {
    PollStore.update((polls) => polls.filter((poll) => poll.id !== id));
  };
</script>

<div class="poll">
  <h3>{poll.question}</h3>
  <p>Total Votes: {totalVotes}</p>
  <div class="answer" on:click={() => handleVote("a", poll.id)} on:keydown>
    <div class="percent percent-a" style="width: {percentA}%" />
    <span>{poll.answerA} ({poll.votesA})</span>
  </div>
  <div class="answer" on:click={() => handleVote("b", poll.id)} on:keydown>
    <div class="percent percent-b" style="width: {percentB}%" />
    <span>{poll.answerB} ({poll.votesB})</span>
  </div>
  <div class="delete">
    <Button
      on:click={() => handleDelete(poll.id)}
      type={"danger"}
      floating={false}
    >
      Delete
    </Button>
  </div>
</div>

<style>
  .poll {
    padding: 20px;
    border-radius: 4px;
  }
  h3 {
    margin-bottom: 10px;
    color: #313131;
  }
  p {
    margin-top: 6px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #313131;
  }
  .answer {
    cursor: pointer;
    background-color: #f5f5f5;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    transition: width 0.3s ease-in-out;
  }
  .percent-a {
    border-left: 4px solid rgb(69, 196, 150);
    background-color: rgb(69, 196, 150, 0.2);
  }
  .percent-b {
    border-left: 4px solid rgb(217, 27, 66);
    background-color: rgb(217, 27, 66, 0.2);
  }
  .delete {
    margin-top: 30px;
    text-align: center;
  }
</style>
