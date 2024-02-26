<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import CardStat from "../../../components/CardStat.svelte";
  import ProTip from "../../../components/ProTip.svelte";
  import img1 from "$lib/images/taishikan/1.png";
  import img2 from "$lib/images/taishikan/2.png";
  import img3 from "$lib/images/taishikan/3.png";
  import img4 from "$lib/images/taishikan/4.png";
  import img5 from "$lib/images/taishikan/5.png";
  import img6 from "$lib/images/taishikan/6.png";
  import img7 from "$lib/images/taishikan/7.png";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">8th Station</h1>
    <h2>Taishi-kan</h2>
    <CardStat time="12:00pm" elevation="3100m" weather="sunny" />
    <p>
      It's at this point I think some form of elevation sickness started to kick
      in.  I didn't feel nauseous or get any headaches.  However I can only walk
      10-20 steps before stopping to catch my own breath.
    </p>
    <p>
      The good news is that the weather cleared up and I felt like I can keep
      going.
    </p>

    <CardImage
      src={img1}
      alt="8th station"
      caption="One of many station stops available for hikers."
    />
    <CardImage src={img2} alt="8th station sign" />
    <CardImage src={img3} alt="8th station 2" />
    <CardImage src={img4} alt="8th station shop" />
    <ProTip
      tip="Food and drinks get more expensive as you go up in elevation.  Buy most of your supplies before you climb!"
    />
    <CardImage src={img5} alt="8th station shop closeup" />
    <CardImage src={img6} alt="8th station shop with food selection" />
    <h2>What's for sale:</h2>
    <div>
      <!-- <div class="overflow-x-auto"> -->
      <table class="table mb-5 mt-5">
        <!-- head -->
        <thead>
          <tr>
            <th>Item</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <!-- Rows -->
          <tr>
            <td>Cup noodles</td>
            <td>600 ¥</td>
          </tr>
          <tr>
            <td>LED Headlights</td>
            <td>2500 ¥</td>
          </tr>
          <tr>
            <td>Bottle of Water</td>
            <td>500 ¥</td>
          </tr>
          <tr>
            <td>Udon Noodles</td>
            <td>700 ¥</td>
          </tr>
          <tr>
            <td>Assorted Hot Drinks</td>
            <td>400 ¥</td>
          </tr>
          <tr>
            <td>Halal Forest Crackers?</td>
            <td>50 ¥ (Discounted)</td>
          </tr>
          <tr>
            <td>Soyjoy</td>
            <td>200 ¥</td>
          </tr>
          <tr>
            <td>Snickers 🍫</td>
            <td>Sold out</td>
          </tr>
          <tr>
            <td>Gloves 🧤</td>
            <td>300 ¥</td>
          </tr>
        </tbody>
      </table>
    </div>
    <CardImage src={img7} alt="More stairs leading up" />
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 550px;
  }
</style>
