<script>
  import Filter from "./Filter.svelte"
  import Card from "./Card.svelte"
  import LayoutGrid, { Cell } from "@smui/layout-grid/styled"

  import fetchData from "./fetchProducts.js"

  let data = fetchData()

  //console.log(data);

  let products = [
    {
      title: "AAA",
      description: "description",
      text: "bom pra caralho!",
      img: "",
      path: "path",
      info: {},
      price: "25.00",
      unity: "un"
    },
    {
      title: "BBBB",
      description: "description",
      text: "melhor impossivel!",
      img: "",
      path: "path",
      info: {},
      price: "36.00",
      unity: "kg"
    },
    {
      title: "CCC",
      description: "description",
      text: "bom pra caralho!",
      img: "",
      path: "path",
      info: {},
      price: "25.00",
      unity: "un"
    },
    {
      title: "DDDD",
      description: "description",
      text: "melhor impossivel!",
      img: "",
      path: "path",
      info: {},
      price: "36.00",
      unity: "kg"
    },
    {
      title: "EEE",
      description: "description",
      text: "bom pra caralho!",
      img: "",
      path: "path",
      info: {},
      price: "25.00",
      unity: "un"
    },
    {
      title: "FFFF",
      description: "description",
      text: "melhor impossivel!",
      img: "",
      path: "path",
      info: {},
      price: "36.00",
      unity: "kg"
    }
  ]
</script>

<div class="productbrowser">
  <h1>ProductBrowser</h1>
  <Filter />

  <LayoutGrid class="wtf">
    {#each products as product, i}
      <Cell>
        <Card {...product} />
      </Cell>
    {/each}
  </LayoutGrid>
</div>

<style lang="scss">
  .productbrowser {
    width: 100%;
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
