<script lang="ts">
  export let src: string;
  export let alt: string;
  export let caption: string = "";
  export let link: string = "";
  export let linkCaption: string = link;
</script>

<div>
  <figure class="card-default-img-container">
    <img class="card-default-img" {src} {alt} />
    {#if caption}
      <figcaption>
        {caption}
      </figcaption>
    {/if}
    {#if link}
      <figcaption>
        <a href={link} target="_blank">{linkCaption}</a>
      </figcaption>
    {/if}
  </figure>
</div>
