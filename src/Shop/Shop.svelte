<script>
  import ProductBrowser from "./Product/Browser/ProductBrowser.svelte";
  import Cart from "./Cart/Cart.svelte";
  import "./Product/Browser/ProductBrowser.svelte";
  export let id;

  import { dictionary, locale, _, init } from "svelte-i18n";
  init({
    fallbackLocale: "en",
    initialLocale: "pt-br",
  });

  import { onMount } from "svelte";
  console.log("ta foda hein");

  onMount(async () => {
    console.log(id);
  });
</script>

<div class="shop">
  <h1>{$_("shop.title")}</h1>

  {#if !id}
    <ProductBrowser />
  {/if}

  {#if id === "browser"}
    <ProductBrowser />
  {/if}

  {#if id === "viewer"}
    <h1>Viewer</h1>
  {/if}

  {#if id === "cart"}
    <h1>Cart</h1>
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
