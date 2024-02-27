<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import CardStat from "../../../components/CardStat.svelte";
  import img1 from "$lib/images/trekToTomoekan/1.png";
  import img2 from "$lib/images/trekToTomoekan/2.png";
  import img3 from "$lib/images/trekToTomoekan/3.png";
  import img4 from "$lib/images/trekToTomoekan/4.png";
  import img5 from "$lib/images/trekToTomoekan/5.png";
  import img6 from "$lib/images/trekToTomoekan/6.png";
  import img7 from "$lib/images/trekToTomoekan/7.png";
  import img8 from "$lib/images/trekToTomoekan/8.jpg";
  import img9 from "$lib/images/trekToTomoekan/9.png";
  import img10 from "$lib/images/trekToTomoekan/10.png";
  import img11 from "$lib/images/trekToTomoekan/11.png";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">From Taishi-kan to Tomoe-kan</h1>
    <h2>Onward from 8th station to the original 8th station</h2>
    <CardStat time="12:30pm" elevation="3100m - 3300m" weather="sunny" />
    <p>
      I will not lie my pacing was terrible.  I had to constantly stop to catch
      my breath and take off my backpack because my back was starting to hurt. 
      I tried adjusting my backpack before but maybe I didn't load my pack
      properly. That's why I had time to take so many photos here!
    </p>

    <CardImage
      src={img1}
      alt="Sunny slope of Mt. Fuji 1"
      caption="Lots of construction vehicles parked."
    />
    <CardImage src={img2} alt="Sunny slope of Mt. Fuji 2" />
    <CardImage src={img3} alt="Sunny slope of Mt. Fuji 3" />
    <CardImage src={img4} alt="Sunny slope of Mt. Fuji 4" />
    <CardImage
      src={img5}
      alt="Sunny slope of Mt. Fuji 5"
      caption="Very few people around at this point"
    />
    <CardImage src={img6} alt="Side view of building" />
    <CardImage src={img7} alt="Mt. Fuji elevation sign 1" />
    <CardImage
      src={img8}
      alt="Mt. Fuji elevation sign 1"
      caption="Air feels thin at 3250m"
    />
    <CardImage src={img9} alt="Hiker window shopping" />
    <CardImage
      src={img10}
      alt="Hiker dressed like a ninja"
      caption="Found a 🐱‍👤"
    />
    <CardImage
      src={img11}
      alt="Stairs going up towards next station"
      caption="Stairs stairs more stairs"
    />
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";
</style>
