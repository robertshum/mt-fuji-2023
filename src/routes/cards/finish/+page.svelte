<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import img1 from "$lib/images/finish/1.jpg";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Finishing the Journey 🏁</h1>
    <h2>5:45pm</h2>
    <h2>2300</h2>
    <h2>🌧</h2>
    <p>
      After stumbling for a few more hours, I made it back.  The weather at the
      base was pouring and I was soaked.  I didn't bring a change of clothes but
      at least I don't have to sleep on the streets tonight! Missed the 2nd last
      bus but made it for the last one (6:40pm).
    </p>
    <CardImage
      src={img1}
      alt="bus to fujisan station"
      caption="Last bus back to Fujisan station."
    />
    <h2 class="subtitle">Some fun facts from my hike:</h2>
    <ul class="list-disc mt-1 mb-5">
      <li class="ml-4">The summit took <strong>6h 47m</strong>.</li>
      <li class="ml-4">The descent took <strong>2h 38m</strong> 🏃🏽‍♂️💨.</li>
      <li class="ml-4">
        Total journey time (with breaks): <strong>9h 25m</strong>.
      </li>
      <li class="ml-4">Started at <strong>8:20am</strong>.</li>
      <li class="ml-4">Finished at <strong>5:45pm</strong>.</li>
      <li class="ml-4">
        I brought <strong>2L</strong> of water but didn't finish it 🐪.
      </li>
      <li class="ml-4">I never needed to use the washroom during my hike.</li>
      <li class="ml-4">The base temperature was roughly <strong>18C</strong></li>
      <li class="ml-4">The summit temperature was roughly <strong>0-5C</strong>, felt colder with the wind.</li>
    </ul>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 550px;
  }
</style>
