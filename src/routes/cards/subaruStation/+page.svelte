<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import ProTip from "../../../components/ProTip.svelte";
  import img1 from "$lib/images/subaruStation/1.png";
  import img2 from "$lib/images/subaruStation/2.jpg";
  import img3 from "$lib/images/subaruStation/3.jpg";
  import img4 from "$lib/images/subaruStation/4.jpg";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">5th Station/Fuji Subaru Station</h1>
    <h2>August 22nd, 2023</h2>
    <h2>2300m</h2>
    <h2>Raining</h2>
    <p>
      There is a gift shop where you can purchase last minute items for your
      trip. I purchased a walking stick where you can collect stamps on many
      mountain huts along the way.
    </p>
    <p>
      There are also toilets you can use but it costs 100-150 Yen and there is
      no plumbing... sewage gets washed down with foam!
    </p>

    <CardImage src={img1} alt="Subaru station outside" />
    <ProTip
      tip="Bring lots of 100 Yen coins.  Mountain huts don't accept CC and the cost of snacks and uses of washrooms are in 100 Yen denominations."
    />
    <ProTip
      tip="Apparently there are coin lockers at the station - good for storing clean change of clothes."
    />
    <CardImage
      src={img2}
      alt="Mt. Fuji water for sale"
      caption="Fuji water on sale for 500 yen.  Is it legit?  Hmm..."
    />
    <CardImage src={img3} alt="Picture of me outside the entrance" />
    <CardImage
      src={img4}
      alt="Entrance to Mt. Fuji"
      caption="Entrance to Yoshida Trail."
    />
    <p>
      The path I will be travelling is the Yoshida Trail, which is the most
      common trail for hikers of Mt. Fuji.
    </p>
    <p>
      I took my sweet time getting ready and by the time I started the hike it
      was 8:20am and I saw no one else from my bus ride 🙈.
    </p>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 550px;
  }
</style>
