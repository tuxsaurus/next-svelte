<script>
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar/styled"
  import IconButton from "@smui/icon-button/styled"
  import Checkbox from "@smui/checkbox/styled"
  import FormField from "@smui/form-field/styled"

  let prominent = false
  let dense = false
  let secondaryColor = false

  import { Link } from "svelte-navigator"

  export let size = "1.4em"
  export let width = size
  export let height = size

  import Home from "svelte-material-icons/Home.svelte"
  import Account from "svelte-material-icons/Account.svelte"
  import Information from "svelte-material-icons/Information.svelte"
  import Hamburger from "svelte-material-icons/Hamburger.svelte"
  import Translate from "svelte-material-icons/Translate.svelte"
  import Cart from "svelte-material-icons/Cart.svelte"
  import Shopping from "svelte-material-icons/Shopping.svelte"
  import Message from "svelte-material-icons/Message.svelte"
  import Heart from "svelte-material-icons/Heart.svelte"
  import NewBox from "svelte-material-icons/ViewDashboard.svelte"
  import Tshirt from "svelte-material-icons/TshirtCrew.svelte"
  import Draw from "svelte-material-icons/Draw.svelte"

  let h = Home

  let data = [
    ["/", "home"]
    // ["#", Translate]
  ]

  import auth from "../../authService"
  import { isAuthenticated, user, user_tasks, tasks } from "../../store"

  let auth0Client

  async function login() {
    await auth.loginWithPopup(auth0Client)
  }
</script>

<TopAppBar variant="static" {prominent} {dense} color={secondaryColor ? "secondary" : "primary"}>
  <Row>
    <Section>
      <IconButton class="material-icons">menu</IconButton>
      <Link class="topnav-icon icon" to="/">
        <!-- <Title>Tem tudo!</Title> -->
        <IconButton class="material-icons" aria-label="Print this page">home</IconButton>
      </Link>
    </Section>
    <Section align="end" toolbar>
      <Link class="topnav-icon icon" to="/about">
        <IconButton class="material-icons" aria-label="Print this page">info</IconButton>
      </Link>

      <Link class="topnav-icon icon" to="#">
        <IconButton on:click={login} class="material-icons" aria-label="Bookmark this page">person</IconButton>
      </Link>

      <IconButton on:click={login} class="material-icons" aria-label="Bookmark this page">person</IconButton>
    </Section>
  </Row>
</TopAppBar>

<style lang="scss">
  nav div {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  .btn {
    padding: 1px 6px;
    /* margin: 0px; */
  }

  TopAppBar {
    height: 48px;
    background-color: red;
  }
</style>
