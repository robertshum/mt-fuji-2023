<script lang="ts">
  import "tailwindcss/tailwind.css";
  import "../global.css";
  import { base } from "$app/paths";
  import { onDestroy, onMount } from "svelte";
  import NeedleEngine from "../components/NeedleEngine.svelte";
  import { goto } from "$app/navigation";

  // Add event listener when the component is mounted
  // Do whatever you have to do to make TS happy.
  const eventListenerCallback: EventListener = (event) => {
    const customEvent = event as CustomEvent<App.ButtonEventData>;

    // Update web app state based on received data
    console.log("Received data from scene:", customEvent.detail);

    const location = customEvent.detail.locationMarker;

    // Navigate to new 'page/card'.  This will populate <slot>
    goto(`${base}/cards/${location}`);
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

<!-- Navigation -->
<div class="app">
  <nav class="header">
    <a href="{base}/cards/intro">"Home"</a>
    <a href="{base}/cards/shinjuku">1</a>
    <a href="{base}/cards/fujiHotel">2</a>
    <a href="{base}/cards/rideToSubaru">3</a>
    <a href="{base}/">Home</a>
    <a href="{base}/markdown">Markdown Page</a>
    <a href="{base}/regular">Regular Page</a>
    <a href="{base}/scenes">Scenes</a>
  </nav>
</div>

<!-- 3JS / Unity Scene -->
<div class="scene">
  <NeedleEngine />
</div>

<!-- Mt. Fuji Title -->
<div class="rows">
  <div class="title">
    <h1>Mt. Fuji / 富士山</h1>
    <h1>3,776 m</h1>
  </div>
  <!-- Dynamic Card Content -->
  <slot />
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@200;400;600&display=swap');
  
  .app {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-flow: column;
    padding: 1.5em;
    z-index: 999;
    min-width: max-content;
  }
  /* Unity scene */
  .scene {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  /* for the space allocation of fuji title + card */
  .rows {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }
  /* fuji title */
  .title {
    z-index: 999;
    margin: 0.5em;
    padding-left: 1em;
    line-height: normal;
    height: fit-content;
  }
  .header {
    top: 0.7em;
    z-index: 999;

    display: inline-block;
    padding: 1rem;
    background: #eee;
    border: 1px solid #ccc;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 1em;
  }
  .header a {
    margin: 0 1rem;
    font-weight: bold;
  }
</style>
