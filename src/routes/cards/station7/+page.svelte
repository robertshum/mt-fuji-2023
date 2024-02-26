<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import CardStat from "../../../components/CardStat.svelte";
  import img1 from "$lib/images/station7/1.png";
  import img2 from "$lib/images/station7/2.png";
  import img3 from "$lib/images/station7/3.png";
  import img4 from "$lib/images/station7/4.jpg";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">7th Station/Tomoekan</h1>
    <CardStat time="10:30am" elevation="2800m" weather="rainy" />
    <p>
      Now the hike is starting to get more challenging.  The elevation is
      started to get more steeper but the rain hasn't stopped.  I am starting to
      discover my jacket isn't 100% waterproof.
    </p>
    <CardImage
      src={img1}
      alt="7th station shopkeepers"
      caption="Shopkeeper stamping my pole"
    />
    <CardImage src={img2} alt="7th station side view" />
    <CardImage src={img3} alt="Kamaiwakan from the side" />

    <CardImage
      src={img4}
      alt="Soggy map"
      caption="Good thing I have a digital copy on my phone."
    />
    <p>
      They handed out paper maps at the 6th station but I didn't take care of it. 😅
    </p>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 550px;
  }
</style>
