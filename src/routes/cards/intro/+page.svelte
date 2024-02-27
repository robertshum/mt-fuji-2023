<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Hello / こんにちわ</h1>
    <h2>
      Come relive my journey in climbing <a
        href="https://en.wikipedia.org/wiki/Mount_Fuji"
        target="_blank">Mt. Fuji</a
      > with this interactive experience.
    </h2>
    <h2 class="subtitle">Use the mouse to navigate the mountain.</h2>
    <h3>Click + Drag to rotate.</h3>
    <h3>Right Click + Drag to pan.</h3>
    <h2 class="subtitle">
      Click on the 🚩 to show detailed info and follow the dotted path 🔴🔴🔴.
    </h2>
    <h1>
      The high level plan was to catch the very first bus to 5th station, hike
      Mt. Fuji, descend, and bus back to the hotel, in 1 day without sleeping in
      mountain huts.
    </h1>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";
</style>
