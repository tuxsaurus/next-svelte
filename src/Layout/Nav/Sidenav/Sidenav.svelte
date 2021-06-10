<script>
  import { Link } from "svelte-navigator";
  import Translate from "svelte-material-icons/Translate.svelte";
  import Close from "svelte-material-icons/Close.svelte";
  import Account from "svelte-material-icons/Account.svelte";

  import Shopping from "svelte-material-icons/Shopping.svelte";
  import Message from "svelte-material-icons/Message.svelte";
  import Home from "svelte-material-icons/Home.svelte";
  import Heart from "svelte-material-icons/Heart.svelte";
  // import Account from "svelte-material-icons/Account.svelte"

  let sidebarToggle = false;

  function toggleSideBar(e) {
    e.preventDefault();
    sidebarToggle = !sidebarToggle;
    if (sidebarToggle) {
      openNav();
    } else {
      closeNav();
    }
  }

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  const handleDarkModeClick = () => {
    console.log("ativar dark mode");
    const darkModeControl = document.getElementById("darkModeControl");
    const lightModeControl = document.getElementById("lightModeControl");
    darkModeControl.style.display = "none";
    lightModeControl.style.display = "block";
  };

  const handleLightModeClick = () => {
    console.log("ativar light mode");
    const darkModeControl = document.getElementById("darkModeControl");
    const lightModeControl = document.getElementById("lightModeControl");
    darkModeControl.style.display = "block";
    lightModeControl.style.display = "none";
  };

  const handleChangeLocalePTBR = () => {
    locale.set("pt-br");
  };

  const handleChangeLocaleEN = () => {
    locale.set("en");
  };

  var d = new Date();
  var hour = d.getHours();

  import { onMount } from "svelte";

  onMount(async () => {
    const darkModeControl = document.getElementById("darkModeControl");
    const lightModeControl = document.getElementById("lightModeControl");
    if (hour > 8 && hour < 18) {
      console.log("ativar light mode");
      darkModeControl.style.display = "block";
      lightModeControl.style.display = "none";
    } else {
      console.log("ativar dark mode");
      darkModeControl.style.display = "none";
      lightModeControl.style.display = "block";
    }
  });
</script>

<div id="mySidenav" class="sidenav">
  <div id="sidebar-header-controls">
    <div class="icon icon-about btn">
      <!-- <a href="#" on:click|preventDefault={handleDarkModeClick}>
          <span id="darkModeControl">🌒</span>
        </a>
        <a href="#" on:click|preventDefault={handleLightModeClick}>
          <span id="lightModeControl">🌞</span>
        </a> -->
    </div>
    <!--
      <div class="icon icon-translate btn">
        <Link to="#">
          <TranslateIcon />
        </Link>
      </div>
      -->

    <div class="icon icon-about btn">
      <a href="#" on:click|preventDefault={handleDarkModeClick}>
        <span id="darkModeControl">🌒</span>
      </a>
      <a href="#" on:click|preventDefault={handleLightModeClick}>
        <span id="lightModeControl">🌞</span>
      </a>
    </div>

    <div class="icon icon-translate btn">
      <Link to="#">
        <div class="dropdown">
          <a
            class=" dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Translate />
          </a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a class="dropdown-item" href="#">Português Br</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">English</a>
            </li>
            <li><a class="dropdown-item" href="#">Español</a></li>
            <li><a class="dropdown-item" href="#">Français</a></li>
          </ul>
        </div>
      </Link>
    </div>

    <div>
      <a href="javascript:void(0)" class="closebtn" on:click={closeNav}>
        <Close />
      </a>
    </div>
  </div>
  <Link class="sidenav-icon" to="/auth">
    <span><Account /></span> <span class="">Autenticação</span>
  </Link>
  <Link class="sidenav-icon" to="/shopping-cart">
    <span><Message /></span> <span class="">Mensagens</span>
  </Link>
  <Link class="sidenav-icon" to="/shopping-cart">
    <!-- <span><ShoppingCartIcon /></span> <span class="">Carrinho</span> -->
  </Link>
  <Link class="sidenav-icon" to="/shopping-cart">
    <span><Shopping /></span> <span class="">Minhas Compras</span>
  </Link>
  <Link class="sidenav-icon" to="/shopping-cart">
    <span><Heart /></span> <span class="">Favoritos</span>
  </Link>
  <Link class="sidenav-icon" to="/about">
    <!-- <span><AboutIcon /></span> <span class="">Sobre</span> -->
  </Link>
</div>

<style lang="scss">
  .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 60px;
    transition: ease-in-out 0.5s;
    display: flex;
    flex-flow: column;
    align-itens: center;
    justify-content: flex-start;

  }
</style>
