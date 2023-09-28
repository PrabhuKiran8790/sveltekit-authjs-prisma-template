<script>
  import { page } from "$app/stores";
  import { signOut } from "@auth/sveltekit/client";
  import Button from "./ui/button/button.svelte";
</script>

{#if !$page.data.session}
  <a href="/login" class="buttonClass"> Sign in </a>
{:else}
  <Button
    on:click={() => {
      signOut({
        callbackUrl: "/",
      });
    }}
    class="w-full">Sign out</Button
  >
{/if}
