<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import img1 from "$lib/images/shinjuku/1.png";
  import img2 from "$lib/images/shinjuku/2.png";
  import img3 from "$lib/images/shinjuku/3.png";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Shinjuku</h1>
    <h2>August 22nd, 2023</h2>
    <p>
      I decided to leave a day before the hike as that gives me more time to
      pack, purchase any food, and do any last minute preparations.
    </p>
    <p>
      The plan was to stay at a hotel close by the bus station where the bus
      would come early in the morning and drive us directly to Fuji Subaru Line
      5th Station.
    </p>
    <figure class="card-default-img-container">
      <img
        class="card-default-img"
        src={img1}
        alt="Busta Shinjuku Station Waiting area."
      />
      <figcaption>
        To buy the tickets to Mt Fuji Station, which was close to my hotel, we
        have to go to Busta Shinjuku, which was across the street from Shinjuku
        station.
      </figcaption>
    </figure>
    <figure class="card-default-img-container">
      <img
        class="card-default-img"
        src={img2}
        alt="Busta Shinjuku Station Waiting area."
      />
      <figcaption>
        Round trip tickets to and from Busta Shinjuku and Mt. Fuji station was about 4,400 Yen / Under $44 CAD.
      </figcaption>
    </figure>
    <figure class="card-default-img-container">
      <img
        class="card-default-img"
        src={img3}
        alt="Busta Shinjuku Station Waiting area."
      />
      <figcaption>
        The highway express bus took about 2h.
      </figcaption>
    </figure>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 550px;
  }
</style>
