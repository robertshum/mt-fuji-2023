<script>
    import NeedleEngine from "../components/NeedleEngine.svelte";
</script>

<div class="cols">
    <NeedleEngine />

    <div class="intro">
        <h1>Needle 💚 Sveltekit</h1>
        <h2 class="subtitle">
            This is an example page built with Sveltekit and Needle Engine
        </h2>
        <p>
            Check out our new font generator and level up your social bios. Need
            more? Head over to Glyphy for all the fancy fonts and cool symbols
            you could ever imagine.
        </p>
    </div>
</div>

<style>
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
    @media (max-width: 1200px) {
        .cols {
            flex-flow: column;
        }
        .intro {
            margin: 1em;
        }
    }
</style>
