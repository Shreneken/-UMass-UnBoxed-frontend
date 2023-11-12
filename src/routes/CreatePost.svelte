<script>
  import { makeAuthenticatedRequest } from "./auth/store.js";
  export let show = false;
  let name, price, image, condition, description;

  function close() {
    show = false;
  }
  async function handleSubmit(e) {
    const formData = new FormData();
    formData.append("product_name", name);
    formData.append("condition", condition);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("image", image);
    await makeAuthenticatedRequest("/create", formData);
    close();
  }
</script>

{#if show}
  <div class="modal">
    <div class="modal-content">
      <h1 id="title">Create Post!</h1>
      <span class="close" on:click={close}>✕</span>
      <!-- Your modal content goes here -->
      <form on:submit|preventDefault={handleSubmit} id="form">
        <input
          type="text"
          id="name"
          bind:value={name}
          placeholder="Product Name"
          class="form-item"
          required
        />
        <input
          type="text"
          id="condition"
          bind:value={condition}
          placeholder="Condition"
          class="form-item"
          required
        />
        <input
          type="number"
          id="price"
          bind:value={price}
          placeholder="Price"
          class="form-item"
          required
        />
        <input
          type="text"
          id="description"
          bind:value={description}
          placeholder="Description"
          class="form-item"
          required
        />
        <label for="image" id="image-label">Image: </label>
        <input
          type="file"
          id="image"
          on:change={(e) => (image = e.target.files[0])}
          accept="image/*"
          class="form-item"
          required
        />
        <button type="submit" id="submit-btn">Submit</button>
      </form>
    </div>
  </div>
{/if}

<style>
  @import "./CreatePost.css";
</style>
