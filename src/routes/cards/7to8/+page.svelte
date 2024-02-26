<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import img1 from "$lib/images/7to8/1.png";
  import img2 from "$lib/images/7to8/2.png";
  import img3 from "$lib/images/7to8/3.png";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Onwards to 8th Station</h1>
    <p>
      The rain stopped but the hiking path became a bit rocky here.  Some
      scrambling is involved.
    </p>
    <p>
      I am also cursing myself for packing so much... it feels like my bag
      weighs a ton.
    </p>

    <CardImage src={img1} alt="Green hillside on Mt. Fuji hillside 1" />
    <CardImage src={img2} alt="Green hillside on Mt. Fuji hillside 2" />
    <CardImage src={img3} alt="Green hillside on Mt. Fuji hillside 3" />
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 550px;
  }
</style>
