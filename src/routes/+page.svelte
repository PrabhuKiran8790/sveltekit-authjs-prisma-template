<script>
  import { page } from "$app/stores";
</script>

<div class="h-full flex flex-col items-center justify-center gap-4">
  <h1 class="text-5xl">Home Page</h1>
  {#if $page.data.session}
    Welcome back, <span class="text-4xl">{$page.data.session.user?.name}!</span>
  {/if}
</div>
