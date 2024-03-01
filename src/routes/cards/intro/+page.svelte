<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Hello / こんにちわ</h1>
    <h1>
      The high-level plan was to 'conquer' Mt. Fuji in one day without sleeping
      in mountain huts. This entails:
    </h1>
    <ol class="list-decimal ml-5">
      <li>Catching the first bus to 5th station.</li>
      <li>Summiting Mt. Fuji.</li>
      <li>Descend.</li>
      <li>Bus back to the hotel.</li>
    </ol>
    <h1>
      Come relive my journey in climbing <a
        href="https://en.wikipedia.org/wiki/Mount_Fuji"
        target="_blank">Mt. Fuji</a
      > with this interactive experience.
    </h1>

    <h2 class="font-extrabold">Click + Drag to rotate.</h2>
    <h2 class="font-extrabold">Hold right click to pan.</h2>
    <h2 class="subtitle">
      Click on the 🚩 to show my checkpoints and follow the dotted path 🔴🔴🔴.
    </h2>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";
</style>
