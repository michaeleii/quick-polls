<script>
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";
  import PollStore from "../stores/PollStore";

  let fields = {
    question: "",
    answerA: "",
    answerB: "",
  };
  let errors = {
    question: "",
    answerA: "",
    answerB: "",
  };

  const dispatch = createEventDispatcher();

  let valid = false;
  const handleSubmit = () => {
    valid = true;
    if (fields.question.trim().length < 10) {
      errors.question = "Question must be at least 10 characters long";
      valid = false;
    } else {
      errors.question = "";
    }
    if (fields.answerA.trim().length < 1) {
      errors.answerA = "Answer A must be at least 1 character long";
      valid = false;
    } else {
      errors.answerA = "";
    }
    if (fields.answerB.trim().length < 1) {
      errors.answerB = "Answer B must be at least 1 character long";
      valid = false;
    } else {
      errors.answerB = "";
    }
    if (valid) {
      let poll = {
        id: crypto.randomUUID(),
        question: fields.question,
        answerA: fields.answerA,
        answerB: fields.answerB,
        votesA: 0,
        votesB: 0,
      };
      PollStore.update((polls) => [poll, ...polls]);
      dispatch("createPoll", poll);
    }
  };
</script>

<div>
  <form on:submit|preventDefault={handleSubmit}>
    <h2>Create a new poll</h2>
    <div class="form-field">
      <label for="question">Question:</label>
      <input
        type="text"
        name="question"
        id="question"
        bind:value={fields.question}
      />
      <div class="error">{errors.question}</div>
    </div>
    <div class="form-field">
      <label for="answerA">Answer A:</label>
      <input
        type="text"
        name="answerA"
        id="answerA"
        bind:value={fields.answerA}
      />
      <div class="error">{errors.answerA}</div>
    </div>
    <div class="form-field">
      <label for="answerB">Answer B:</label>
      <input
        type="text"
        name="answerB"
        id="answerB"
        bind:value={fields.answerB}
      />
      <div class="error">{errors.answerB}</div>
    </div>
    <div>
      <Button>Create Poll</Button>
    </div>
  </form>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
  }
  form {
    width: 400px;
  }
  h2 {
    margin: 40px auto;
    text-align: center;
    color: #313131;
  }
  .form-field {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  label {
    margin-bottom: 10px;
  }
  input {
    font-family: inherit;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  .error {
    color: #d91b42;
    font-size: 0.8em;
    font-weight: bold;
    margin-top: 5px;
  }
</style>
