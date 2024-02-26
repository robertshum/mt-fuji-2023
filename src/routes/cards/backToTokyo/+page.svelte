<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import img1 from "$lib/images/backToTokyo/1.jpg";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Back to Tokyo</h1>
    <h2>August 24th</h2>
    <p>
      Initially, I just wanted to relax in Japan for my trip but I realize it
      might be fun to challenge myself to a solo hike.  I've always thought
      climbing Mt. Fuji was something that was out of reach so it's a pleasant
      surprise when I did my research and learned it's climbable in many ways
      over a period of 1-2 days.
    </p>
    <CardImage
      src={img1}
      alt="Highway view from the bus"
      caption="Highway bus back to Busta Shinjuku."
    />
    <h2 class="subtitle">Lessons Learned:</h2>
    <ul class="list-disc mt-1 mb-5">
      <li class="ml-4">
        Research and preparation paid off huge dividends.  I chose an abnormal
        hiking schedule but the plan worked.  Most people stretch the hike into
        2 days but a single day hike is possible.
      </li>
      <li class="ml-4">
        Don't purchase onigiri the night before the hike. The rice became hard
        during the hike up and it became inedible... at least the 7-11 ones.
      </li>
      <li class="ml-4">
        I should have done the two day hike if I wanted to enjoy the hike more! 
        The hike up was fine but it was rushed the way down.
      </li>
      <li class="ml-4">
        Don't bring CamelBack/Hydration packs to Mt. Fuji.  The fine volcano
        sand gets into the mouth piece.  No one likes sucking on sand.
      </li>
    </ul>
    <p>
      In the end I highly recommend climbing Mt. Fuji at least once!  It's
      doable in a day or two and it's very hard to get lost.  There are signs
      everywhere and the trail is very well maintained. The sense of
      accomplishment when you finish is hard to describe.
    </p>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 550px;
  }
</style>
