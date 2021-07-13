<script>
  export let msg: string
  let count = 0
</script>

<h1 class="bg-blue-500">From phoenix controller: {msg}</h1>
<div class="p-4 bg-blue-100" on:click={() => count++}>count: {count}</div>
<h3 class="testing text-white">
  something

</h3>

<style>
  .testing {
    @apply bg-red-200;
  }
  h1 {
    @apply text-white;
  }
</style>
