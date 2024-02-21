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
        position: relative;
        min-height: 200px;
        flex: 1 1 auto;
    }
</style>
