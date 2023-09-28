<script>
  import "../app.postcss";
  import { Navbar } from "$lib/components";
</script>

<Navbar />

<div class="h-screen pt-20">
  <div class="h-full">
    <slot />
  </div>
</div>
