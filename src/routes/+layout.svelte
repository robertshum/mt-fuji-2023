<script lang="ts">
  import "../global.css";
  import { base } from "$app/paths";
</script>

<div class="app">
  <div class="header">
    <a href="{base}/">Home</a>
    <a href="{base}/markdown">Markdown Page</a>
    <a href="{base}/regular">Regular Page</a>
    <a href="{base}/scenes">Scenes</a>
  </div>
</div>

<main>
  <slot />
</main>

<style>
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

  /* main {
        position: fixed;
        flex: 1 1 auto;
        flex-flow: column;
        display: flex;
    } */

  main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    flex: 1 1 auto; /* Allow the main element to grow and shrink as needed */
    flex-flow: column; /* Set the direction of the flex container to column */
    display: flex; /* Establish a flex container */
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
