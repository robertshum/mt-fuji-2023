<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import img1 from "$lib/images/rideToSubaru/1.jpg";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">Ride to Subaru 5th Station</h1>
    <h2>August 23rd, 2023</h2>
    <p>
      From my hotel to Fujisan bus station was a 3min walk, and then getting to
      the 5th station was easy! It's one bus that goes to the 5th station with
      stops along the way.
    </p>
    <p>
      Pro tip: if you want a seat on the bus, line up just before 6am at Fujisan
      station.  Otherwise by the time you get to Kawaguchiko, there is a good
      chance you will be standing for the trip.... and the ride is at least an
      hour.
    </p>
    <figure class="card-default-img-container">
      <img
        class="card-default-img"
        src={img1}
        alt="Ticket poster for Quick Ride to Mt. Fuji."
      />
      <figcaption>
        <a href="https://info-fujikyu.quickride.jp/" target="_blank"
          >Link to purchase tickets</a
        >
      </figcaption>
    </figure>
    <p>
      Pro tip: You can purchase your tickets online from the site above.  Just
      make sure you have internet connection when you board the bus to activate
      it!
    </p>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 450px;
  }
</style>
