<script>
  import { _, init, addMessages } from "svelte-i18n";
  init({
    fallbackLocale: "en",
    initialLocale: "pt-br",
  });
//   addMessages('pt', pt);

</script>

<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">{$_("user.profile.password")}</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">{$_("user.profile.address")}</label>
    <input
      type="text"
      class="form-control"
      id="inputAddress"
      placeholder="1234 Main St"
    />
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">{$_("user.profile.address2")}</label>
    <input
      type="text"
      class="form-control"
      id="inputAddress2"
      placeholder="Apartment, studio, or floor"
    />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">{$_("user.profile.city")}</label>
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">{$_("user.profile.state")}</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">{$_("user.profile.zip")}</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck"> Check me out </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
