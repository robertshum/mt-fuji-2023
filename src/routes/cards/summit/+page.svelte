<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import img1 from "$lib/images/summit/1.jpg";
  import img2 from "$lib/images/summit/2.png";
  import img3 from "$lib/images/summit/3.png";
  import img4 from "$lib/images/summit/4.png";
  import img5 from "$lib/images/summit/5.png";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Summit</h1>
    <h2>3:00pm</h2>
    <h2>3776m</h2>
    <h2>☁</h2>
    <CardImage src={img1} alt="Tori gate picture" />
    <p>
      I finally reached the gate and I knew the summit was close by!  It's just
      a few more stairs.
    </p>
    <CardImage src={img2} alt="Another tori gate picture" />
    <p>
      When I reached the summit, it looked like everything was under
      construction.
    </p>
    <CardImage src={img3} alt="Foggy summit" />
    <p>
      Most of the huts looked closed and I didn't see any shops to get my final
      stamp.
    </p>
    <CardImage
      src={img4}
      alt="Foggy summit 2"
      caption="Why is everything closed!?"
    />
    <p>
      It didn't really matter because I reached the summit!!! I took some time
      to rest, took a few pictures and relished in my achievement.
    </p>
    <CardImage src={img5} alt="Summit with signpost in fog" />
    <p>
      Of course this was short lived because when I checked the time it was
      3:07pm, and the last bus to go back to town leaves at 6:40pm.  That means
      I have just over 3h 30m for the descent.  It took me just under 7h to get
      to the summit!!!
    </p>
    <h2>Time to Panic 😱</h2>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 550px;
  }
</style>
