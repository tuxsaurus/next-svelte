<script>
  import { Route } from "svelte-navigator"

  let cmp

  const setComponent = module => {
    cmp = module.default
  }

  const logError = err => {
    console.error((err && err.stack) || err)
  }

  //
  import Auth from "../../User/Auth/Auth.svelte"
  import Home from "../../Pages/Home/Home.svelte"
  //
  import User from "../../User/User.svelte"
  //import("../../User/User.svelte").then(module => {
  //  const cmp = module.default
  //  console.log(module.myNamedExport)
  //})

  import Shop from "../../Shop/Shop.svelte"
  //import("../../Shop/Shop.svelte").then(module => {
  //  const cmp = module.default
  //  console.log(module.myNamedExport)
  //})

  import About from "../../Pages/About/About.svelte"
  //import("../../Pages/About/About.svelte").then(module => {
  //  const About = module.default
  //  console.log(About)
  //  console.log(module.myNamedExport)
  //})
  const loadAbout = e => {
    e.preventDefault()
    var asd
    import("../../Pages/About/About.svelte").then(r=>{asd=r}).catch(logError)
    return asd
  }

  let isOnline = true

  const routes = [
    ["/", Home],
    ["auth", Auth],
    ["about", About]
  ]
</script>

<main class="container" data-theme="dark">
  <Route path="/">
    <Home />
  </Route>

  <Route path="/auth">
    <Auth />
  </Route>

  <Route path="/user">
    {#if isOnline === true}
      <User />
    {:else}
      <Auth />
    {/if}
  </Route>

  <Route path="/shop/:id" let:params>
    <Shop id={params.id} />
  </Route>

  <Route path="/about">
    <!-- {loadAbout} -->
    
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
