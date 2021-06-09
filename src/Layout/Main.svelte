<script>
  import { Route } from "svelte-navigator";
  import Auth from "../Auth/Auth.svelte";
  import Home from "../Pages/Home.svelte";
  import About from "../Pages/About/About.svelte";

</script>

const routes = [["auth", Auth]]

<main>
  <Route path="/">
    <Home />
  </Route>

  <Route path="/auth">
    <Auth />
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
