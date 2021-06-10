<script>
    import { Link } from "svelte-navigator";
    export let img;
    export let title;
    export let text;
    export let price;
    export let unity;
    export let id;
  </script>
  
  <div class="product-card card grid-item">
    <Link to="/shop/{id}">
      <!-- <img src={img} class="card-img-top" alt="..." lazy /> -->
    </Link>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <small><p class="card-text">{text}</p></small>
      <h3 style="text-align: center; margin-top: 9px;">
        R$ {price}
        {#if unity === "un"}{:else}
          / {unity}
        {/if}
      </h3>
    </div>
    <!--
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
      -->
  </div>
  
  <style lang="scss">
    .product-card {
      margin: 12px;
    }
  </style>
  