<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Hello / こんにちわ</h1>
    <h2>
      Come relive my journey in climbing <a
        href="https://en.wikipedia.org/wiki/Mount_Fuji">Mt. Fuji</a
      > with this interactive experience.
    </h2>
    <h2 class="subtitle">Use the mouse to navigate the mountain.</h2>
    <h3>Click + Drag to rotate.</h3>
    <h3>Right Click + Drag to pan.</h3>
    <h2 class="subtitle">
      Click on the flag to get started and follow the path 🔴.
    </h2>
    <p>
      The high level plan was to catch the very first bus to 5th station, hike
      Mt. Fuji, descend, and bus back to the hotel, in 1 day without sleeping in
      mountain huts.
    </p>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 450px;
  }
</style>
