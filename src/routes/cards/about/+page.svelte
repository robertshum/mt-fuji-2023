<script>
  import TransitionCardWrapper from "../../../components/TransitionCardWrapper.svelte";
</script>

<TransitionCardWrapper>
  <article class="card-info">
    <h1 class="card-title">About</h1>
    <h2>
      This project was an exercise and showcase of newer front-end technologies.
      I chose the theme of climbing Mt. Fuji because I haven't seen any other
      blogs or websites that provide a detailed interactive walkthrough. The
      tech used to make this web application are:
    </h2>
    <div>
      <!-- <div class="overflow-x-auto"> -->
      <table class="table mb-5 mt-5">
        <!-- head -->
        <thead>
          <tr>
            <th>Stack</th>
            <th>Notes</th>
            <th>Site</th>
          </tr>
        </thead>
        <tbody>
          <!-- Rows -->
          <tr>
            <td><strong>Needle.tools</strong></td>
            <td>Web engine with Unity/3Js integration</td>
            <td
              ><a href="https://needle.tools/" target="_blank"
                >https://needle.tools/</a
              ></td
            >
          </tr>
          <tr>
            <td><strong>Svelte/Sveltekit</strong></td>
            <td>Web framework built on Svelte</td>
            <td
              ><a href="https://kit.svelte.dev/" target="_blank"
                >https://kit.svelte.dev/</a
              ></td
            >
          </tr>
          <tr>
            <td><strong>Tailwind CSS</strong></td>
            <td>Pretty nifty CSS framework</td>
            <td
              ><a href="https://tailwindcss.com/" target="_blank"
                >https://tailwindcss.com/</a
              ></td
            >
          </tr>
          <tr>
            <td><strong>DaisyUI</strong></td>
            <td>Component Library for TailwindCSS</td>
            <td
              ><a href="https://daisyui.com/" target="_blank"
                >https://daisyui.com/</a
              ></td
            >
          </tr>
        </tbody>
      </table>
      <h2>
        Special thanks to <a
          class="font-bold"
          href="https://mastodon.gamedev.place/@marwi"
          target="_blank">@marcel</a
        >
        and
        <a
          class="font-bold"
          href="https://twitter.com/hybridherbst"
          target="_blank">@herbst</a
        > in discord for helping me out with the Needle framework!
      </h2>
    </div>
  </article>
</TransitionCardWrapper>

<style>
  @import "../../../card.css";
</style>
