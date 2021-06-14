<script>
  import ProductBrowser from "./Product/Browser/ProductBrowser.svelte"
  import Cart from "./Cart/Cart.svelte"
  import "./Product/Browser/ProductBrowser.svelte"
  export let id

  import { dictionary, locale, _, init } from "svelte-i18n"
  init({
    initialLocale: "pt-br"
  })

  import { onMount } from "svelte"
  console.log("ta foda hein")

  onMount(async () => {
    console.log(id)
  })
</script>

<div class="shop">
  <h1>{$_("shop.title")}</h1>
  <h1>{$_("shop.viewer")}</h1>

  <iframe src="https://www.youtube.com/watch?v=LIIDh-qI9oI" />

  <iframe
    title="La page Wikipédia consacrée à Robert Louis Stevenson"
    src="https://fr.wikipedia.org/wiki/Robert_Louis_Stevenson"
  />

  {#if !id}
    <h3>{$_("shop.productBrowser")}</h3>
    <ProductBrowser />
  {/if}

  {#if id === "browser"}
    <ProductBrowser />
  {/if}

  {#if id === "viewer"}
    <h1>$_('shop.viewer')</h1>
  {/if}

  {#if id === "cart"}
    <h1>{$_("shop.cart")}</h1>
    <!-- <Cart /> -->
  {/if}
</div>

<hr />

<style lang="scss">
  .shop {
    width: 100%;
    max-width: 1240px;
    /* background-color: red; */
  }
</style>
