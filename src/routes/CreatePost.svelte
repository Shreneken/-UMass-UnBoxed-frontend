<script>
  export let show = false;
  let name, price, image, condition;

  function close() {
    show = false;
  }
  function handleSubmit() {}
</script>

{#if show}
  <div class="modal">
    <div class="modal-content">
      <span class="close" on:click={close}>✕</span>
      <!-- Your modal content goes here -->
      <form on:submit|preventDefault={handleSubmit}>
        <input type="text" id="name" bind:value={name} placeholder="Product Name" required />
        <br />
        <br />
        <input type="text" id="condition" bind:value={condition} placeholder="Condition" required />
        <br />
        <br />
        <input type="number" id="price" bind:value={price} placeholder="Price" required />
        <br />
        <br />
        <label for="image">Image: </label>
        <input
          type="file"
          id="image"
          on:change={(e) => (image = e.target.files[0])}
          accept="image/*"
          required
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
{/if}

<style>
  /* Add your modal styles here */
  .modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    max-width: 400px;
    margin: 0 auto;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }
</style>
