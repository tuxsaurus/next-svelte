<script>
  import Address from "./Address.svelte"
  import Cart from "svelte-material-icons/Map.svelte"
</script>

<h1>Profile</h1>

<div class="addresses">
  <h1>username</h1>
  <div class="username input-group mb-3">
    <span class="input-group-text" id="inputGroup-sizing-default">@</span>
    <input
      type="text"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
      placeholder="username"
    />
  </div>
  <h3>Endereços</h3>
  <hr />
  <h3>Pedidos</h3>
  <hr />
  <h3>Arquivos</h3>
  <hr />
</div>

<style>
  .addresses {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
  }

  .username {
    max-width: 260px;
  }
</style>
