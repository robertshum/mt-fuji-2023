<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import CardStat from "../../../components/CardStat.svelte";
  import img1 from "$lib/images/tomoekan/1.png";
  import img2 from "$lib/images/tomoekan/2.jpg";
  import img3 from "$lib/images/tomoekan/3.jpg";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Original 8th Station</h1>
    <h2>Tomoe Kan / Fujisan Hotel</h2>
    <CardStat time="1:20pm" elevation="3300m" weather="cloudy" />
    <p>
      Made it to the original 8th station.  I didn't want to stop at every
      single mountain hut to get stamps because that would cost too much.
    </p>
    <p>
      I was also running out of time because I still had to hike back down.  I really did not want to miss the last bus to back to town.  So, I took a few pictures and kept going up.
    </p>

    <CardImage
      src={img1}
      alt="Looking downhill near the original 8th station"
    />
    <CardImage src={img2} alt="Tomoekan" />
    <CardImage src={img3} alt="Fujisan Hotel and restaurant" />
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 550px;
  }
</style>
