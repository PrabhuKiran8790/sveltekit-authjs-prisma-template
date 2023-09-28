<script>
  import * as Avatar from "$lib/components/ui/avatar";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { page } from "$app/stores";
  import { AuthButton } from "$lib/components";

  const links = [
    // { name: 'Profile', href: '/profile' },
    { name: "Dashboard", href: "/dashboard" },
    // { name: "About", href: "/about" },
  ];
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 border-b-2 shadow-sm text-foreground backdrop-opacity-100 backdrop-blur-3xl backdrop-brightness-100 dark:backdrop-brightness-50 border-foreground/80"
>
  <div
    class="container flex items-center justify-between w-full px-4 mx-auto max-w-7xl"
  >
    <a href="/" class="text-2xl font-semibold tracking-tight transition-colors"
      >SvelteKit OAuth
    </a>
    <div class="flex items-center gap-2">
      {#if $page.data.session}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Avatar.Root>
              <Avatar.Image
                src={$page.data.session.user?.image}
                alt={$page.data.session.user?.name}
              />
              <Avatar.Fallback>
                {`${$page.data.session.user?.name?.split(" ")[0][0]}${
                  $page.data.session.user?.name?.split(" ")[1][0]
                }`}
              </Avatar.Fallback>
            </Avatar.Root>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content class="min-w-[150px] z-50">
            <DropdownMenu.Group>
              <DropdownMenu.Label>
                {$page.data.session.user?.name}
              </DropdownMenu.Label>
              <DropdownMenu.Separator />
              {#each links as link (link.href)}
                <DropdownMenu.Item
                  class={$page.url.pathname === link.href
                    ? "bg-foreground/10 text-foreground"
                    : "hover:bg-foreground/10"}
                >
                  <a href={link.href} class="w-full">{link.name}</a>
                </DropdownMenu.Item>
              {/each}
              <DropdownMenu.Separator />
              <DropdownMenu.Item class="p-[2px]">
                <AuthButton />
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      {:else}
        <AuthButton />
      {/if}
    </div>
  </div>
</nav>
