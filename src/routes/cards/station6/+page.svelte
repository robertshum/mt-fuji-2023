<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import CardStat from "../../../components/CardStat.svelte";
  import img1 from "$lib/images/station6/1.png";
  import img2 from "$lib/images/station6/2.png";
  import img3 from "$lib/images/station6/3.png";
  import img4 from "$lib/images/station6/4.jpg";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">6th Station/Mt. Fuji Safety Guidance Center</h1>
    <CardStat time="9:30am" elevation="2390m" weather="thunderRain" />
    <p>
      The initial trek was very forgiving.  Very flat surface but it was pouring
      rain... with thunder.
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
</style>
