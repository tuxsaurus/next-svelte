<script>
  import { Link } from "svelte-navigator";

  export let size = "1.4em";
  export let width = size;
  export let height = size;

  import Home from "svelte-material-icons/Home.svelte";
  import Account from "svelte-material-icons/Account.svelte";
  import Information from "svelte-material-icons/Information.svelte";
  import Hamburger from "svelte-material-icons/Hamburger.svelte";
  import Translate from "svelte-material-icons/Translate.svelte";
  import Cart from "svelte-material-icons/Cart.svelte";
  import Shopping from "svelte-material-icons/Shopping.svelte";
  import Message from "svelte-material-icons/Message.svelte";
  import Heart from "svelte-material-icons/Heart.svelte";
  import NewBox from "svelte-material-icons/ViewDashboard.svelte"
  import Tshirt from "svelte-material-icons/TshirtCrew.svelte"
  import Draw from "svelte-material-icons/Draw.svelte";



  let h = Home;

  let data = [
    ["/", "home"],
    // ["#", Translate]
  ];
</script>

<nav class="layout header navbar fixed-top navbar-light bg-light" data-theme="dark">
  <div class="container-fluid">
    <div>
      <Link class="navbar-brand" to="/">
        <button type="button" class="btn">
          <Hamburger {width} {height} />
        </button>
      </Link>
      <Link class="navbar-brand" to="/">
        <button type="button" class="btn">
          <span><strong>Brand</strong></span>
        </button>
      </Link>
    </div>
    <div>
      <!-- {#each data as item, i}
        {item[1]}
      {/each} -->
      <Link class="topnav-icon icon" to="/">
        <button type="button" class="btn btn-link">
          <Home {width} {height} />
        </button>
      </Link>

      <Link class="topnav-icon icon" to="/about">
        <button type="button" class="btn btn-link">
          <Translate {width} {height} />
        </button>
      </Link>

      <Link class="topnav-icon icon" to="/about">
        <button type="button" class="btn btn-link">
          <Tshirt {width} {height} />
        </button>
      </Link>

      <Link class="topnav-icon icon" to="/about">
        <button type="button" class="btn btn-link">
          <Draw {width} {height} />
        </button>
      </Link>

      <Link class="topnav-icon icon" to="/about">
        <button type="button" class="btn btn-link">
          <NewBox {width} {height} />
        </button>
      </Link>

      <Link class="topnav-icon icon" to="/shop/browser">
        <button type="button" class="btn btn-link">
          <Shopping {width} {height} />
        </button>
      </Link>
      <Link class="topnav-icon icon" to="/shop/cart">
        <button type="button" class="btn btn-link">
          <Cart {width} {height} />
        </button>
      </Link>
      <Link class="topnav-icon icon" to="/about">
        <button type="button" class="btn btn-link">
          <Information {width} {height} />
        </button>
      </Link>
      <Link class="topnav-icon icon" to="/auth">
        <button type="button" class="btn btn-link">
          <Heart {width} {height} />
        </button>
      </Link>
      <Link class="topnav-icon icon" to="/auth">
        <button type="button" class="btn btn-link">
          <Account {width} {height} />
        </button>
      </Link>
      <Link class="topnav-icon icon" to="/user">
        <button type="button" class="btn btn-link">
          <Account {width} {height} />
        </button>
      </Link>
    </div>
  </div>
</nav>

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
</style>
