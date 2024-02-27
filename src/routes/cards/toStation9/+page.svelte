<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import img1 from "$lib/images/toStation9/1.png";
  import img2 from "$lib/images/toStation9/2.png";
  import img3 from "$lib/images/toStation9/3.png";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Onwards to 9th Station</h1>
    <h2>I am so sick of stairs</h2>
    <p>
      It started to get foggy at this point.  It's a surreal feeling when you
      can't see more than 25m ahead of you and you hear nothing but the howling
      wind.
    </p>
    <CardImage src={img1} alt="Signs and markers in the fog" />
    <CardImage src={img2} alt="Shop with stairs 1" />
    <CardImage
      src={img3}
      alt="Shop with stairs 2"
      caption="Oh look, more stairs."
    />
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";
</style>
