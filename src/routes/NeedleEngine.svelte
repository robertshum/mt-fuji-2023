<script lang="ts">
    import { onMount } from "svelte";

    export let src: string = "";

    onMount(async () => {
        await import("./../generated/gen.js");
        await import("@needle-tools/engine");
    });
</script>

<needle-engine {src} />

<style>
    needle-engine {
        position: relative;
        min-height: 200px;
        flex: 1 1 auto;

        /** round corners */
        border-radius: 1em;
        overflow: hidden;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.05);
    }
</style>
