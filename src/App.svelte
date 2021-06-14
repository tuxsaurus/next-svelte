<script>
  import { Router } from "svelte-navigator"

  import Header from "./Layout/Header/Header.svelte"
  import Main from "./Layout/Main/Main.svelte"
  import Footer from "./Layout/Footer/Footer.svelte"

  // Auth0
  // import auth from "./authService"
  // import { isAuthenticated, user, user_tasks, tasks } from "./store"
  let auth0Client

  import {
    Auth0Context,
    Auth0LoginButton,
    Auth0LogoutButton,
    authError,
    authToken,
    idToken,
    isAuthenticated,
    isLoading,
    userInfo
  } from "./Auth/components.module"

  import { onMount } from "svelte"
  import Sidenav from "./Layout/Nav/Sidenav/Sidenav.svelte"

  import { init, addMessages, dictionary, locale, register } from "svelte-i18n"
  let languages = ["pt-br", "en", "es", "fr"]
  languages.forEach(value => {
    register(value, function () {
      return window
        .fetch("/i18n/" + value + ".json")
        .then(data => data.json())
        .catch(error => console.log("i18n fetch error", error))
    })
  })

  // init i18n
  init({
    // fallback to en if current locale is not in the dictionary
    fallbackLocale: "en",
    initialLocale: "pt-br"
    // initialLocale: getLocaleFromNavigator(),
  })

  export let date

  // $: console.log(date);

  onMount(async () => {
    // const res = await fetch("/api/date")
    // const newDate = await res.text()
    // date = newDate
    // console.log(date)
    //
    //console.log(auth0Client);

    try {
      //await client.loginWithPopup(options);
      //await auth.loginWithPopup(auth0Client);
      // auth0Client = await auth.createClient()
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }

    // isAuthenticated.set(await auth0Client.isAuthenticated())
    //console.log(isAuthenticated);
    // user.set(await auth0Client.getUser())
    //console.log(user);
  })

  function login() {
    try {
      //await client.loginWithPopup(options);
      // auth.loginWithPopup(auth0Client);
    } catch (e) {
      // eslint-disable-next-line
      console.error(e)
    }
  }

  function logout() {
    auth.logout(auth0Client)
  }
</script>

<Auth0Context
  domain="dev-hvw40i79.auth0.com"
  client_id="aOijZt2ug6Ovgzp0HXdF23B6zxwA6PaP"
  audience="process.env.AUTH0_AUDIENCE"
  callback_url="process.env.AUTH0_DEFAULT_CALLBACK_URL"
  logout_url="process.env.AUTH0_DEFAULT_CALLBACK_URL"
>
  <Router>
    <Header />
    <Sidenav />
    <Main />
    <Footer />
  </Router>s

  <!-- <Auth0LoginButton class="btn">Login</Auth0LoginButton>
  <Auth0LogoutButton class="btn">Logout</Auth0LogoutButton> -->

  <!-- <table>
    <thead>
      <tr><th>store</th><th>value</th></tr>
    </thead>
    <tbody>
      <tr><td>isLoading</td><td>{$isLoading}</td></tr>
      <tr><td>isAuthenticated</td><td>{$isAuthenticated}</td></tr>
      <tr><td>authToken</td><td>{$authToken}</td></tr>
      <tr><td>idToken</td><td>{$idToken}</td></tr>
      <tr><td>userInfo</td><td><pre>{JSON.stringify($userInfo, null, 2)}</pre></td></tr>
      <tr><td>authError</td><td>{$authError}</td></tr>
    </tbody>
  </table> -->
</Auth0Context>

<style lang="scss">
  body {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
  }
</style>
