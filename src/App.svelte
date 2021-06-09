<script>
  import { Router } from "svelte-navigator";

  import Header from "./Layout/Header.svelte";
  import Main from "./Layout/Main.svelte";
  import Footer from "./Layout/Footer.svelte";

  import { onMount } from "svelte";

  export let date;

  onMount(async () => {
    const res = await fetch("/api/date");
    const newDate = await res.text();
    date = newDate;
  });
</script>

<Router>
  <Header />
  <Main />
  <Footer />
</Router>

<style lang="scss">
  body {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
  }
</style>
