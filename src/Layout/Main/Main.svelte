<script>
  import { Route } from "svelte-navigator";
  import Auth from "../../User/Auth/Auth.svelte";
  import Home from "../../Pages/Home/Home.svelte";
  import About from "../../Pages/About/About.svelte";
  import User from "../../User/User.svelte";
  import Shop from "../../Shop/Shop.svelte";

  let isOnline = true;

  const routes = [
    ["/", Home],
    ["auth", Auth],
    ["about", About],
  ];
</script>

<main class="container" data-theme="dark">
  <Route path="/">
    <Home />
  </Route>

  <Route path="/auth">
    <Auth />
  </Route>

  <Route path="/user">
    {#if isOnline === true}
      <User />
    {:else}
      <Auth />
    {/if}
  </Route>

  <Route path="/shop/:id" let:params>
    <Shop id={params.id} />
  </Route>


  <Route path="/about">
    <About />
  </Route>
</main>

<style lang="scss">
  main {
    margin-top: 64px;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
  }
</style>
