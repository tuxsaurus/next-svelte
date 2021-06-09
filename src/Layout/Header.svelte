<script>
  import { Link } from "svelte-navigator";

  export let size = "1.5em";
  export let width = size;
  export let height = size;

  import Home from "svelte-material-icons/Home.svelte";
  import Account from "svelte-material-icons/Account.svelte";
  import Information from "svelte-material-icons/Information.svelte";

</script>

<nav class="navbar fixed-top navbar-light bg-light">
  <div class="container-fluid">
    <div>
      <Link class="navbar-brand" to="/">
        <button type="button" class="btn">
          <span><strong>Brand</strong></span>
        </button>
      </Link>
    </div>
    <div>
      <Link class="topnav-icon icon" to="/">
        <button type="button" class="btn btn-link">
          <Home {width} {height} />
        </button>
      </Link>
      <Link class="topnav-icon icon" to="/about">
        <button type="button" class="btn btn-link">
          <Information {width} {height} />
        </button>
      </Link>
      <Link class="topnav-icon icon" to="/auth">
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

  .icon {
    margin: 2px 9px;
    padding: 2px 9px;
  }
</style>
