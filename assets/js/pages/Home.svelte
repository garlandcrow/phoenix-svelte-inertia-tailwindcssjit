<script>
  export let msg: string
</script>

<h1 class="bg-[#0000ff]">From phoenix controller: {msg}</h1>
<div class="testing"><div class="nested">postcss nesting works</div></div>

<style lang="postcss">
  .testing {
    .nested {
      @apply bg-green-500;
    }
  }
  h1 {
    @apply text-white;
  }
</style>
