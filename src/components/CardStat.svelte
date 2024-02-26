<script lang="ts">
  import CloudySVG from "./weather/CloudySVG.svelte";
  import DefaultSVG from "./weather/DefaultSVG.svelte";
  import RainySVG from "./weather/RainySVG.svelte";
  import SunnySVG from "./weather/SunnySVG.svelte";
  import ThunderRain from "./weather/ThunderRainSVG.svelte";
  export let time: string;
  export let elevation: string;
  export let weather: string = "sunny";
</script>

<div>
  <div class="stats shadow mt-1 mb-1">
    <div class="stat">
      <div class="stat-figure text-secondary">
        {#if weather === "sunny"}
          <SunnySVG />
        {:else if weather === "cloudy"}
          <CloudySVG />
        {:else if weather === "rainy"}
          <RainySVG />
        {:else if weather === "thunderRain"}
          <ThunderRain />
        {:else}
          <DefaultSVG />
        {/if}
      </div>
      <div class="stat-title">Arrival</div>
      <div class="stat-value">{time}</div>
      <div class="stat-desc">Elevation: <strong>{elevation}</strong></div>
    </div>
  </div>
</div>
