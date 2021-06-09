<script>
  import { Route } from "svelte-navigator";
  import Auth from "../Auth/Auth.svelte";
  import Home from "../Pages/Home.svelte";
</script>

<main>
  <Route path="/">
    <Home />
  </Route>

  <Route path="/auth">
    <Auth />
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
