<script lang="ts">
  export let value: string;
  export let max: string;
</script>

<progress class="progress progress-info w-20" {value} {max}></progress>
