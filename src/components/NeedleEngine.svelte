<script lang="ts">
  import { onMount } from "svelte";

  $: src = "";

  onMount(async () => {
    await import("@needle-tools/engine");
    await import("../generated/gen.js");
    // in case no src is defined we use the global variable that is set inside of the codegen file gen.js
    src = globalThis["needle:codegen_files"] as any;
  });
</script>

<needle-engine loading-style="light" {src} {...$$props} />

<style>
  needle-engine {
    margin: 0.75em;
    position: relative;
    min-height: 93vh;
    flex: 1 1 auto;
    border-radius: 1em;
    overflow: hidden;
    box-shadow: 0 0 5px #0000001a;
    border: 1px solid white;
  }
</style>
