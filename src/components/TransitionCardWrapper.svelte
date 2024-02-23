<script>
  import { fly } from "svelte/transition";
</script>

<div class="card" in:fly={{ y: 25, duration: 650 }}>
  <slot />
</div>

<style>
  .card {
    /*Need to update the z-index for dynamic content.  Otherwise it will be hidden */
    z-index: 1;
  }
</style>
