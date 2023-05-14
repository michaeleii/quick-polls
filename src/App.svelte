<script>
  import CreatePollForm from "./lib/CreatePollForm.svelte";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  import PollList from "./lib/PollList.svelte";
  import Tabs from "./shared/Tabs.svelte";

  let tabs = ["Current Polls", "Create Poll"];
  let activeTab = tabs[0];

  const handleTabChange = (e) => (activeTab = e.detail);
  const handleCreatePoll = (e) => (activeTab = tabs[0]);
</script>

<Header />
<main>
  <Tabs {tabs} {activeTab} on:tabChange={handleTabChange} />
  {#if activeTab === tabs[0]}
    <PollList />
  {:else if activeTab === tabs[1]}
    <CreatePollForm on:createPoll={handleCreatePoll} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin-left: auto;
    margin: 40px auto;
  }
</style>
