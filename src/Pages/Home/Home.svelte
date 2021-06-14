<script>
  let cidade = "rio de janeiro"

  // var data =
  class Previsao {
    constructor(hoje, amanha) {
      this.hoje = hoje
      this.amanha = amanha
    }
  }

  let prev

  let temp_min_hoje
  let temp_max_hoje

  let temp_min_amanha
  let temp_max_amanha

  let temp_min_depois
  let temp_max_depois

  //   let local = previsao.local;
  async function fetchData() {
    const response = await fetch("https://apiprevmet3.inmet.gov.br/previsao/3304557")
    const data = await response.json()
    return data
  }

  fetchData()
    .then(data => console.log(data))
    .catch(error => {
      console.log(error)
    })

  async function handleClick(e) {
    console.log(this)
    console.log(e)

    try {
      fetch("https://apiprevmet3.inmet.gov.br/previsao/3304557", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
        // body: JSON.stringify(dataPayload)
      })
        .then(response => {
          return response.json()
        })
        .then(data => {
          //   var d = JSON.stringify(data);
          window.x = data
          x = data[Object.keys(data)[0]] // pega o filho do objeto pai
          x = x[Object.keys(x)[0]] // // pega o neto do objeto pai

          temp_min_hoje = x.manha.temp_min

          temp_max_hoje = x.manha.temp_max

          console.log(data)
          console.log(x)
          return data
        })
        .then(() => {})
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }

  handleClick().then(console.log())

  import { onMount } from "svelte"
  //import Shop from "../../Shop/Shop.svelte";
  import Shop from "../../Shop/Shop.svelte"
  //import("../../Shop/Shop.svelte").then(module => {
  //  const cmp = module.default
  //  console.log(module.myNamedExport)
  //})
  import Hero from "./Hero.svelte"

  export let date

  onMount(async () => {
    // const res = await fetch("/api/date")
    // const newDate = await res.text()
    // date = newDate
  })
</script>

<div class="home">
  <h1>Home</h1>

  <Hero />

  <div>
    <h1>Home Hero!@</h1>

    <Shop />

    <h1>Blog</h1>

    <!-- 
  {temp_min_amanha}
  {temp_max_amanha} -->
  </div>

  <button on:click={handleClick} type="submit" class="btn btn-primary"> Submit </button>
</div>

<style lang="scss">
  .home {
    width: 100%;
    max-width: 1240px;
    /* background-color: red; */
  }
</style>
