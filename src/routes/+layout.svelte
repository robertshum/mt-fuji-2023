<script lang="ts">
    import { base } from "$app/paths";
</script>

<div class="app">
    <div class="header">
        <a href="{base}/">Home</a>
        <a href="{base}/markdown">Markdown Page</a>
        <a href="{base}/regular">Regular Page</a>
        <a href="{base}/scenes">Scenes</a>
    </div>
    <main>
        <slot />
    </main>
</div>

<style>
    .app {
        display: flex;
        flex-flow: column;
        height: 100%;
        padding: 1.5em;
    }

    main {
        position: relative;
        flex: 1 1 auto;
        flex-flow: column;
        display: flex;
    }

    div.header {
        display: inline-block;
        padding: 1rem;
        background: #eee;
        border: 1px solid #ccc;
        border-radius: 50px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    a {
        text-decoration: none;
        font-weight: bold;
        margin: 0px 10px;
        position: relative;
        color: black;
    }

    a:visited {
        color: inherit;
    }

    a:hover {
        color: #4d7716;
    }
</style>
