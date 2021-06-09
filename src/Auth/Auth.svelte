<script>
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  function ValidateEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      isEmailValid = true;
      //console.log(isEmailValid)
      return true;
    }
    //console.log("You have entered an invalid email address!")
    isEmailValid = false;
    //console.log(isEmailValid)
    return false;
  }

  let email = "";
  let isEmailValid = null;
  // let isMailValid = false

  $: if (email) {
    console.log("$: if (email)")

    console.log(isEmailValid)
    ValidateEmail(email);
  }

  let pass = "";

  $: if (pass) {
    console.log(pass)
    if (pass.length > 5) {
      isSinginButtonDisabled = false;
    }
  }

  let remember = false;
  $: if (remember || !remember) {
    //console.log(remember)
  }

  let isSinginButtonDisabled = "true";

  let serverResponse = {};

  async function handleClick(e) {
    console.log(e);

    console.log(this);
  }
</script>

<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input
      type="email"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      bind:value={email}
    />
    <div id="emailHelp" class="form-text">
      We'll never share your email with anyone else.
    </div>
    {#if isEmailValid === false}
      <small style="color: red;">
        <span style="color: red;">O email inserido não é válido.</span>
      </small>
    {/if}
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input
      bind:value={pass}
      type="password"
      class="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div class="mb-3 form-check">
    <input
      bind:checked={remember}
      type="checkbox"
      class="form-check-input"
      id="exampleCheck1"
    />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button on:click={handleClick} type="submit" class="btn btn-primary">Submit</button>
</form>

<style lang="scss">
  form {
    max-width: 400px;
    margin-top: 24px;
  }
</style>
