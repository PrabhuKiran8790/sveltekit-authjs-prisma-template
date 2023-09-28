<script>
  export let data;
</script>

<div class="h-full flex flex-col items-center justify-center gap-4">
  {#if data.session}
    <h1 class="text-5xl">Dashboard</h1>
    Welcome back,<span class="text-4xl">{data.session.user?.name}!</span>
  {/if}
</div>
