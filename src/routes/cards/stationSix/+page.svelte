<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import img1 from "$lib/images/stationSix/1.png";
  import img2 from "$lib/images/stationSix/2.png";
  import img3 from "$lib/images/stationSix/3.png";
  import img4 from "$lib/images/stationSix/4.jpg";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">6th Station/Mt. Fuji Safety Guidance Center</h1>
    <h2>930am</h2>
    <h2>2390m</h2>
    <h2>🌧</h2>
    <p>
      The initial trek was very forgiving.  Very flat surface but it was pouring
      rain.
    </p>
    <p>
      There were waves of hikers coming back from the hike, presumably the
      morning crowd where they saw the sunrise.  It was kind of funny and sad at
      the same time, looking at their facial expressions... they all looked
      exhausted and fatigued!
    </p>

    <CardImage
      src={img1}
      alt="6th station"
      caption="First stop - only 1-2h hike from the entrance."
    />
    <CardImage src={img2} alt="Hikers resting." />
    <CardImage src={img3} alt="Looking up at the hiking trail" />
    <CardImage
      src={img4}
      alt="Fog resting on the trail"
      caption="The fog started to pick up as I continue hiking."
    />
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 550px;
  }
</style>
