<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import img1 from "$lib/images/fujiHotel/1.jpg";
  import img2 from "$lib/images/fujiHotel/2.jpg";
  import img3 from "$lib/images/fujiHotel/3.png";
  import img4 from "$lib/images/fujiHotel/4.png";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Fujisan Station Hotel</h1>
    <p>
      When I arrived it was pretty late at night and nothing around me was open
      except for a 7-11 that was a 10-15m walk.
    </p>
    <p>
      Since I didn't buy any food or water for the trip tomorrow and I didn't
      have dinner plans, it was time for a short hike to the local convenience
      store.
    </p>
    <p>
      The plan was to stay at a hotel close by the bus station where the bus
      would come early in the morning and drive us directly to Fuji Subaru Line
      5th Station.
    </p>
    <figure class="card-default-img-container">
      <img class="card-default-img" src={img1} alt="Fujisan Hotel at night." />
    </figure>
    <figure class="card-default-img-container">
      <img
        class="card-default-img"
        src={img2}
        alt="Walking at night to 7-11."
      />
      <figcaption>
        On my way to 7-11.  This town is really quiet and everything seems to
        close by 8pm.
      </figcaption>
    </figure>
    <figure class="card-default-img-container">
      <img
        class="card-default-img"
        src={img3}
        alt="Instant noodles and dried cracker."
      />
      <figcaption>
        Dinner: Banana Yogurt drink? instant noodles with fried cracker and
        seaweed salad.
      </figcaption>
      <figure class="card-default-img-container">
        <img
          class="card-default-img"
          src={img4}
          alt="Top level view of what I am packing for Mt. Fuji."
        />
        <figcaption>
          It was time to pack before I went to bed.  Here is what I packed:
        </figcaption>
      </figure>
      <p>
        Columbia Silver RidgeTM Utility Pants The North Face Carto Triclimate
        Jacket Nighthucks Quick dry shirt Spare foldable bag Hoodie Passport
        Medication (Painkillers, Antihistamines) Wet wipes Sunscreen Hand
        sanitizer Fuji X100s Camera Mont Bell hiking poles Wallet / Pouch Thiccc
        Socks Gloves Uniqlo Heattech Pants Backpack Quickdry towel Hat Battery
        pack / Cable Phone Water/Camel pack Hiking shoes Egg Sandwich Energy
        Gels x 2 Snickers bar
      </p>
    </figure>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 500px;
  }
</style>
