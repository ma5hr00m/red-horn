<script>
  export let friend;
  let showUrl = false;
</script>

<div class="card">
  <a class="link" href={friend.href} 
     on:mouseover={() => showUrl = true} 
     on:mouseout={() => showUrl = false}
     on:focus={() => showUrl = true} 
     on:blur={() => showUrl = false}>
    <div class="image">
      <img class="avatar" src={friend.avatar} alt={friend.name}>
    </div>
    <div class="text">
      <h3 class="name">{friend.name}</h3>
      {#if showUrl}
        <p class="url">🔗{friend.href.replace(/^https?:\/\//, '')}</p>
      {:else}
        <p class="description">{friend.description}</p>
      {/if}
    </div>
  </a>
</div>

<style lang="scss">
  .card {
    margin-bottom: 1rem;
  }
  .link {
    padding: .75rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: background .2s;
    border-radius: .5rem;
    border: 1px solid #ddd;

    &:hover {
      background-image: repeating-linear-gradient(45deg, #fff, #fff 14px, #fff2f2 14px, #fff2f2 16px);
      border: 1px solid #FFA941;
    }
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;

    .avatar {
      height: 2.75rem;
      border-radius: .5rem;
    }
  }
  .text {
    color: #666;

    h3 {
      margin-bottom: .25rem;
      color: #FFA941;
    }
    .description,
    .url {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 16rem;
      font-size: .75rem;
    }
    .url {
      text-decoration: underline;
    }
  }

</style>