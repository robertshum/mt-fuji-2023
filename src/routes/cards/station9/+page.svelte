<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import img1 from "$lib/images/station9/1.jpg";
  import img2 from "$lib/images/station9/2.png";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">9th Station</h1>
    <h2>2pm</h2>
    <h2>3500m</h2>
    <h2>☁</h2>
    <p>
      The 'station' is basically an abandoned wooden house with no one inside.
    </p>
    <CardImage
      src={img1}
      alt="9th Station"
    />
    <p>
      At this point, everyone, including myself started to double up on clothing
      because the temperature must have been close to 0 C.  With the wind, it
      felt even colder.
    </p>
    <CardImage src={img2} alt="Spooky fog near 9th station" caption="Spooky" />
    <p>
      Earlier in the hike I was upset for bringing all the extra clothing but it
      really paid off.  I rested for a short period and continued trekking.  The summit was closeby!
    </p>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 550px;
  }
</style>
