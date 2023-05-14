<script>
  export let type = "primary";
  export let floating = true;
  export let outline = false;
</script>

<button class={type} class:floating class:outline on:click>
  <slot />
</button>

<style>
  button {
    padding: 8px 12px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    font-family: "Inter", sans-serif;
    outline: none;
    transition: background-color 0.2s ease-in-out;
  }
  button:hover {
    cursor: pointer;
  }

  .primary {
    background-color: #009fe4;
    color: white;
  }
  .primary:hover {
    background-color: #0286be;
  }
  .secondary {
    background-color: #45c496;
    color: white;
  }
  .secondary:hover {
    background-color: #24805e;
  }
  .danger {
    background-color: #ee165e;
    color: white;
  }
  .danger:hover {
    background-color: #cc1854;
  }

  .outline {
    background-color: white;
    border: 1px solid orangered;
    color: orangered;
  }
  .outline:hover {
    background-color: orangered;
    color: white;
  }

  .floating {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
</style>
