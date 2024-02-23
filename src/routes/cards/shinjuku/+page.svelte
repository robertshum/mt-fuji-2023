<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Shinjuku / こんにちわ</h1>
    <h2>...technically Busta Shinjuku </h2>
    <h2 class="subtitle">Use the mouse to navigate the world.</h2>
    <h3>Click + Drag to rotate</h3>
    <h3>Right Click + Drag to pan</h3>
    <h2 class="subtitle">
      Click on the flag to get started and follow the path 🔴.
    </h2>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 550px;
  }
</style>
