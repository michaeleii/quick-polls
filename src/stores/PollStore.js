import { writable } from "svelte/store";

const PollStore = writable([
  {
    question: "Option A or Option B?",
    answerA: "Option A",
    answerB: "Option B",
    votesA: 0,
    votesB: 0,
  },
]);

export default PollStore;
