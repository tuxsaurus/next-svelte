<script>
  import { Router } from "svelte-navigator";

  import Header from "./Layout/Header/Header.svelte";
  import Main from "./Layout/Main/Main.svelte";
  import Footer from "./Layout/Footer/Footer.svelte";

  import { onMount } from "svelte";
  import Sidenav from "./Layout/Nav/Sidenav/Sidenav.svelte";

  import { init, addMessages, dictionary, locale, register } from "svelte-i18n";
  let languages = ["pt-br", "en", "es", "fr"];
  languages.forEach((value) => {
    register(value, function () {
      return window
        .fetch("/i18n/" + value + ".json")
        .then((data) => data.json())
        .catch((error) => console.log("i18n fetch error", error));
    });
  });

  // init i18n
  init({
    // fallback to en if current locale is not in the dictionary
    fallbackLocale: "en",
    initialLocale: "pt-br",
    // initialLocale: getLocaleFromNavigator(),
  });

  export let date;

  // $: console.log(date);

  onMount(async () => {
    const res = await fetch("/api/date");
    const newDate = await res.text();
    date = newDate;
    console.log(date);
  });
</script>

<Router>
  <Header />
  <Sidenav />
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
