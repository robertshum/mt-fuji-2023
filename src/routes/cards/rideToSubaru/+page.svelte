<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import ProTip from "../../../components/ProTip.svelte";
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
    <ProTip
      tip="If you want a seat on the bus, line up just before 6am at Fujisan
    station.  Otherwise it might be full by the time you get to Kawaguchiko."
    />
    <CardImage
      src={img1}
      alt="Ticket poster for Quick Ride to Mt. Fuji."
      caption=""
      link="https://info-fujikyu.quickride.jp/"
      linkCaption="Link to purchase tickets"
    />
    <ProTip
      tip="Purchase online with the link ahead of time.  Make sure you have internet connection when you board the bus to activate it!"
    />
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 450px;
  }
</style>
