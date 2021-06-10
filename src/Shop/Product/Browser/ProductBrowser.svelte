<script>
  import Filter from "./Filter.svelte";
  import Card from "./Card.svelte";

  import fetchData from "./fetchProducts.js";

  let data = fetchData();

  //console.log(data);

  let products = [
    {
      title: "titlexxx",
      description: "description",
      text: "bom pra caralho!",
      img: "",
      path: "path",
      info: {},
      price: "25.00",
      unity: "un",
    },
    {
      title: "yyy",
      description: "description",
      text: "melhor impossivel!",
      img: "",
      path: "path",
      info: {},
      price: "36.00",
      unity: "kg",
    },
    {
      title: "titlexxx",
      description: "description",
      text: "bom pra caralho!",
      img: "",
      path: "path",
      info: {},
      price: "25.00",
      unity: "un",
    },
    {
      title: "yyy",
      description: "description",
      text: "melhor impossivel!",
      img: "",
      path: "path",
      info: {},
      price: "36.00",
      unity: "kg",
    },
    {
      title: "titlexxx",
      description: "description",
      text: "bom pra caralho!",
      img: "",
      path: "path",
      info: {},
      price: "25.00",
      unity: "un",
    },
    {
      title: "yyy",
      description: "description",
      text: "melhor impossivel!",
      img: "",
      path: "path",
      info: {},
      price: "36.00",
      unity: "kg",
    },
  ];
</script>

<div class="productbrowser">
  <h1>ProductBrowser</h1>
  <Filter />

  <div
    class="grid products-row row row-cols-1 row-cols-md-3 row-cols-xl-4 g-12"
  >
    {#each products as product, i}
      <Card {...product} />
    {/each}
  </div>
</div>

<style lang="scss">
  .productbrowser {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
  }

  .grid {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
  }
</style>
