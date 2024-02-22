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

<div class="cols">
  <div class="title">
    <h1>Mt. Fuji / 富士山</h1>
    <h1>3,776 m</h1>
  </div>

  <article class="info">
    <h1>Hello / こんにちわ</h1>
    <h2>
      Come join me in climbing <a
        href="https://en.wikipedia.org/wiki/Mount_Fuji">Mt. Fuji</a
      > with this interactive experience.
    </h2>
    <h2 class="subtitle">Use the mouse to navigate the world.</h2>
    <h3>Click + Drag to rotate</h3>
    <h3>Right Click + Drag to pan</h3>
    <h2 class="subtitle">
      Click on the flag to get started and follow the path 🔴.
    </h2>
  </article>
</div>

<style>
  /* scrollbar */
  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: #e7e7e7;
    border: 1px solid #cacaca;

    display: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 3px solid transparent;
    background-clip: content-box;
    background-color: #d55959;
  }

  /* to fake the height of the thumb, I used margins for the top and bottom 'end pieces' of the track */
  ::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 45px;
  }

  ::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 45px;
  }
  .scene {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .cols {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    /* justify-content: flex-end; */
    /* flex-wrap: nowrap; */
  }
  .title {
    z-index: 999;
    margin: 0.5em;
    padding-left: 1em;
    line-height: normal;
  }
  .info {
    z-index: 999;
    max-width: 500px;
    margin: 0.75em;

    padding: 2.5em;
    border: 1px solid #ccc;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: aliceblue;

    overflow-y: scroll;
    /* height: 90vh; */
    max-height: 90vh;
    min-height: 20vh;
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
