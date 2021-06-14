<script>
  import { Link } from "svelte-navigator"
  //import Paper, { Title, Subtitle, Content } from "@smui/paper"
  //import ImageList, { Item, Image, Supporting, Label } from "@smui/image-list"
  import Card, { Content, PrimaryAction, Media, MediaContent, Actions, ActionButtons, ActionIcons } from "@smui/card/styled"
  import Button, { Label } from "@smui/button/styled"
  import IconButton, { Icon } from "@smui/icon-button/styled"

  let clicked = 0

  export let img
  export let title
  export let text
  export let price
  export let unity
  export let id
</script>

<div class="product-card card grid-item">
  <div class="card-container">
    <Card>
      <PrimaryAction on:click={() => clicked++}>
        <Media class="card-media-16x9" aspectRatio="16x9">
          <MediaContent>
            <div style="color: #fff; position: absolute; bottom: 16px; left: 16px;">
              <h2 class="mdc-typography--headline6" style="margin: 0;">{title}</h2>
              <h3 class="mdc-typography--subtitle2" style="margin: 0;">
                R$ {price}
                {#if unity === "un"}{:else}
                  / {unity}
                {/if}
              </h3>
            </div>
          </MediaContent>
        </Media>
        <Content class="mdc-typography--body2">
          {text}
          {clicked}
        </Content>
      </PrimaryAction>
      <Actions>
        <ActionButtons>
          <Button on:click={() => clicked++}>
            <Label>Action</Label>
          </Button>
          <Button on:click={() => clicked++}>
            <Label>Another</Label>
          </Button>
        </ActionButtons>
        <ActionIcons>
          <IconButton on:click={() => clicked++} toggle aria-label="Add to favorites" title="Add to favorites">
            <Icon class="material-icons" on>favorite</Icon>
            <Icon class="material-icons">favorite_border</Icon>
          </IconButton>
          <IconButton class="material-icons" on:click={() => clicked++} title="Share">share</IconButton>
          <IconButton class="material-icons" on:click={() => clicked++} title="More options">more_vert</IconButton>
        </ActionIcons>
      </Actions>
    </Card>
  </div>
</div>

<style lang="scss">
  .product-card {
    margin: 12px;
    width: 100%;
  }

  * :global(.card-media-16x9) {
    background-image: url(https://place-hold.it/320x180?text=16x9&fontsize=23);
  }
</style>
