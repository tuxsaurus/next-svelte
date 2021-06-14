<script>
  import { onMount } from "svelte"
  import { dictionary, locale, _, init } from "svelte-i18n"
  //import SvelteMarkdown from 'svelte-markdown'
  //   import { Remarkable } from "remarkable";
  // const {markdown} = require('svelte-preprocess-markdown');
  import Md from "./about.md"

  //   import("./about.md").then((data) => {
  //     console.log(data);
  //   });
</script>

<div id="about" class="page page-about" data-page="about">
  <h3>{$_("shop.productBrowser")}</h3>
  <h1>About</h1>
  <Md />
</div>

<style>
</style>
