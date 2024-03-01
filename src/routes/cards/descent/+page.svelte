<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import img1 from "$lib/images/descent/1.png";
  import img2 from "$lib/images/descent/2.png";
  import img3 from "$lib/images/descent/3.png";
  import img4 from "$lib/images/descent/4.png";
  import img5 from "$lib/images/descent/5.png";
  import img6 from "$lib/images/descent/6.png";
  import img7 from "$lib/images/descent/7.png";
  import img8 from "$lib/images/descent/8.jpg";
  import img9 from "$lib/images/descent/9.jpg";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">The Descent</h1>
    <h2>It's time to run 🏃🏽‍♂️💨💨💨</h2>
    <p>
      I was already hiking for 7h so at this point my legs are jelly. But I was
      reminding myself either suck it up or end up sleeping on the streets.
    </p>
    <CardImage src={img1} alt="View of the descent of Mt. Fuji 1" />
    <CardImage src={img2} alt="View of the descent of Mt. Fuji 2" />
    <CardImage src={img3} alt="View of the descent of Mt. Fuji 3" />
    <p>
      Since I was running / jogging down the mountain, the front of my toes kept
      jamming into the front of the shoe.
    </p>
    <CardImage src={img4} alt="View of the descent of Mt. Fuji 4" />
    <p>
      My toes started to bruise and this is the part where my big toe nail broke
      off and it started to bleed.
    </p>
    <CardImage src={img5} alt="Looking up at the hiking trail" />
    <p>
      I tripped and fell many times because the trail was rocky, sandy and it's
      hard to get a good footing when you're jogging on a downhill slope.
    </p>
    <CardImage src={img6} alt="Looking up at the hiking trail" />
    <p>
      If you miss the last bus you are in trouble - there are no hotels at the
      base of 5th station.  There are no vehicles, including taxis, at night
      because access is closed.  Most likely one would have to stay at the
      station at night until the first bus in the morning.
    </p>
    <CardImage src={img7} alt="Looking up at the hiking trail" />
    <p>
      I'm also too cheap to shell out 150 CAD for a taxi back home anyways. Here
      are some stories of people stranded at 5th station:
    </p>
    <h2>
      <a
        href="https://www.japan-guide.com/forum/quereadisplay.html?0+178212"
        target="_blank">Japan Guide</a
      >
    </h2>
    <h2>
      <a
        href="https://www.reddit.com/r/JapanTravel/comments/15fon5g/mt_fuji_day_trip/"
        target="_blank">Reddit</a
      >
    </h2>
    <CardImage src={img8} alt="Looking up at the hiking trail" />
    <p>
      I really wish I had more time to enjoy the trek down.  The views were
      better than the summit and the weather was great on this segment of the
      hike!
    </p>
    <CardImage
      src={img9}
      alt="Looking up at the hiking trail"
      caption="Here, hikers can take shelter in the man-made cutout in case of avalanches."
    />
    <p>
      Good news is that I was on pace to catch one of the last few busses back
      to town.
    </p>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";
</style>
