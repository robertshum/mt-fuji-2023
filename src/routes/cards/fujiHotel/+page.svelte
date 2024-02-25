<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
  import CardImage from "../../../components/CardImage.svelte";
  import ProgressBar from "../../../components/ProgressBar.svelte";
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
    <CardImage src={img1} alt="Fujisan Hotel at night." />
    <CardImage
      src={img2}
      alt="Walking at night to 7-11."
      caption="On my way to 7-11.  This town is really quiet and everything seems to close by 8pm."
    />
    <CardImage
      src={img3}
      alt="Instant noodles and dried cracker."
      caption="Dinner: Banana yogurt drink?  Instant noodles topped with a fried cracker and seaweed salad.  Champion food right here."
    />
    <CardImage
      src={img4}
      alt="Top level view of what I am packing for Mt. Fuji."
    />

    <h2>This was what I ended up packing:</h2>
    <div>
      <!-- <div class="overflow-x-auto"> -->
      <table class="table table-xs mb-5 mt-5">
        <!-- head -->
        <thead>
          <tr>
            <th>Item</th>
            <th>Usefulness</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          <!-- Rows -->
          <tr>
            <td>Columbia Silver RidgeTM Utility Pants</td>
            <td><ProgressBar value="80" max="100" /></td>
            <td>Light, blocks UV</td>
          </tr>
          <tr>
            <td>The North Face Carto Triclimate Jacket</td>
            <td><ProgressBar value="70" max="100" /></td>
            <td>2 in 1 Jacket, but not fully waterproof</td>
          </tr>
          <tr>
            <td>Nighthucks Quick dry shirt</td>
            <td><ProgressBar value="90" max="100" /></td>
            <td>Go Nighthucks!</td>
          </tr>
          <tr>
            <td>Spare foldable bag</td>
            <td><ProgressBar value="20" max="100" /></td>
            <td>Never used it</td>
          </tr>
          <tr>
            <td>Hoodie</td>
            <td><ProgressBar value="80" max="100" /></td>
            <td>Nice and warm</td>
          </tr>
          <tr>
            <td>Passport</td>
            <td>N/A</td>
            <td>I wasn't going to leave it at the hotel</td>
          </tr>
          <tr>
            <td>Medication (Painkillers, Antihistamines)</td>
            <td><ProgressBar value="80" max="100" /></td>
            <td>Never used but it's nice to have</td>
          </tr>
          <tr>
            <td>Wet wipes</td>
            <td><ProgressBar value="60" max="100" /></td>
            <td>Don't remember using this much</td>
          </tr>
          <tr>
            <td>Sunscreen</td>
            <td><ProgressBar value="50" max="100" /></td>
            <td>It's hard to evaluate</td>
          </tr>
          <tr>
            <td>Fuji X100s Camera</td>
            <td>N/A</td>
            <td>I bring this everywhere</td>
          </tr>
          <tr>
            <td>Hand sanitizer</td>
            <td><ProgressBar value="90" max="100" /></td>
            <td>Wash your hands before you eat</td>
          </tr>
          <tr>
            <td>Mont Bell hiking poles</td>
            <td><ProgressBar value="100" max="100" /></td>
            <td>My knees says thank you going downhill</td>
          </tr>
          <tr>
            <td>Wallet / Pouch</td>
            <td>N/A</td>
            <td>Gotta carry the coins in something</td>
          </tr>
          <tr>
            <td>Thiccc Socks</td>
            <td><ProgressBar value="90" max="100" /></td>
            <td>Feet stayed mostly dry and warm</td>
          </tr>
          <tr>
            <td>Gloves</td>
            <td><ProgressBar value="70" max="100" /></td>
            <td>Should have bought better ones</td>
          </tr>
          <tr>
            <td>Uniqlo Heattech Pants</td>
            <td><ProgressBar value="100" max="100" /></td>
            <td>Kept my legs warm!</td>
          </tr>
          <tr>
            <td>Backpack</td>
            <td>N/A</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Quickdry towel</td>
            <td><ProgressBar value="70" max="100" /></td>
            <td>Towels are always useful</td>
          </tr>
          <tr>
            <td>Hat</td>
            <td><ProgressBar value="100" max="100" /></td>
            <td>Blocks the sun and rain</td>
          </tr>
          <tr>
            <td>Batterypack / Cable</td>
            <td><ProgressBar value="75" max="100" /></td>
            <td>Phone is a battery monster so this is nice</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td><ProgressBar value="100" max="100" /></td>
            <td>Digital maps and reception available on Mt. Fuji</td>
          </tr>
          <tr>
            <td>Hydration Pack</td>
            <td><ProgressBar value="10" max="100" /></td>
            <td>Sand gets stuck on mouth piece, finnicky to use</td>
          </tr>
          <tr>
            <td>Columbia Hiking Shoes</td>
            <td><ProgressBar value="100" max="100" /></td>
            <td>Good on wet rocks</td>
          </tr>
          <tr>
            <td>7-11 Egg Sandwich</td>
            <td><ProgressBar value="85" max="100" /></td>
            <td>Delicious</td>
          </tr>
          <tr>
            <td>Energy Gel x 2</td>
            <td><ProgressBar value="90" max="100" /></td>
            <td>Should have bought 3</td>
          </tr>
          <tr>
            <td>Snickers Bar</td>
            <td><ProgressBar value="90" max="100" /></td>
            <td>Should have bought 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";

  .card-info {
    max-width: 500px;
  }
</style>
