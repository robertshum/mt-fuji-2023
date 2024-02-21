<script lang="ts">
  import NeedleEngine from "../components/NeedleEngine.svelte";
  import { onDestroy, onMount } from "svelte";

  // Add event listener when the component is mounted
  // Do whatever you have to do to make TS happy.
  const eventListenerCallback: EventListener = (event) => {
    const customEvent = event as CustomEvent<App.ButtonEventData>;

    // Update web app state based on received data
    console.log("Received data from scene:", customEvent.detail);

    // TODO maybe use stores to update state of current info
  };

  onMount(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("buttonData", eventListenerCallback);
    }
  });

  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("buttonData", eventListenerCallback);
    }
  });
</script>

<div class="scene">
  <NeedleEngine />
</div>

<!-- <div class="cols">
    <div class="intro">
        <h1>Needle 💚 Sveltekit</h1>
        <h2 class="subtitle">
            This is an example page built with <a href="https://kit.svelte.dev/"
                >Sveltekit</a
            >
            and <a href="https://needle.tools">Needle&nbsp;Engine</a>
        </h2>
        <p>
            You can use this as a starting point for building your own Needle
            Engine experiences with Sveltekit.
        </p>
        <p>
            Find the repository <a
                href="https://github.com/needle-engine/sveltekit-sample"
                >here on github</a
            >. 
            The repository is setup to be automatically built and deployed too
            with Github Actions 😊
        </p>
    </div>
</div> -->

<style>
  .scene {
    height: 100%;
  }
  .cols {
    display: flex;
    flex-flow: row;
    justify-content: center;
    flex: 1 1 auto;
  }
  .intro {
    max-width: 500px;
    margin: 2em;
  }
  @media (max-width: 700px) {
    .cols {
      flex-flow: column;
    }
    .intro {
      margin: 1em;
    }
  }
</style>
