<script lang="ts">
  import "tailwindcss/tailwind.css";
  import "../global.css";
  import { base } from "$app/paths";
  import { onDestroy, onMount } from "svelte";
  import NeedleEngine from "../components/NeedleEngine.svelte";
  import { goto } from "$app/navigation";
  import { getNavigationMap } from "../scripts/navigation/menu";

  // current selected nav menu
  let activeItem = "";

  const navMap = getNavigationMap();

  // Add event listener when the component is mounted
  // Do whatever you have to do to make TS happy.
  const eventListenerCallback: EventListener = (event) => {
    const customEvent = event as CustomEvent<App.ButtonEventData>;

    // Update web app state based on received data
    console.log("Received data from scene:", customEvent.detail);

    const location = customEvent.detail.locationMarker;

    // Navigate to new 'page/card'.  This will populate <slot>
    activeItem = `${base}/cards/${location}`;
    goto(activeItem);
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

  const setActiveItem = (eventName: string, url: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent(`goToMarker-${eventName}`, { detail: { value: true } }),
      );
    }

    activeItem = url;
    console.log("activeItem", activeItem);
    goto(url);
  };
</script>

<div class="rows">
  <!-- Dynamic Card Content -->
  <div class="flex-item-1">
    <div class="flex-col">
      <!-- Mt. Fuji Title -->
      <div class="m-2 pl-4 bg-blue-50 border rounded-lg min-w-40">
        <span class="text-lg">
          <p class="inline">🗻</p>
          <p class="inline text-sky-800 font-extrabold relative top-[0.15em]">
            Mt. FUJI
          </p>
          <p class="text-md text-red-900 font-medium">富士山/3776m</p>
        </span>
      </div>
      <!-- Navigation Menu -->
      <ul class="menu">
        {#each navMap as navItem}
          <li>
            <button
              class={activeItem === navItem.value
                ? "active"
                : "hover:bg-lime-50 hover:border hover:rounded-lg"}
              on:click={() => setActiveItem(navItem.eventName, navItem.value)}
            >
              {navItem.key}
            </button>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="flex-item-2">
    <!-- Main Card -->
    <slot />
  </div>
  <div class="flex-item-3">
    <!-- 3JS / Unity Scene -->
    <NeedleEngine />
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@200;400;600&display=swap");

  .flex-item-1 {
    flex-grow: 0;
    flex-basis: 10%;
  }

  .flex-item-2 {
    flex-grow: 0;
    flex-basis: 40%;
  }

  .flex-item-3 {
    flex-grow: 1;
    flex-basis: 50%;
  }

  /* for the space allocation of fuji title + card */
  .rows {
    display: flex;
    flex-flow: row;
    width: 100%;
    height: 90%;
    padding: 1.5em;
  }
</style>
