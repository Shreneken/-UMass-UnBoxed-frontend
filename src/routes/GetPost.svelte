<script>
  export let show = false;
  export let currPost;

  function close() {
    show = false;
  }
</script>

{#if show}
  <div class="modal">
    <div class="modal-content">
      <h1 id="title">Listing Details</h1>
      <span class="close" on:click={close}>✕</span>
      <img src={currPost.getImage()} alt="Image not found" id="post-img" />
      <p><strong>Name:</strong> {currPost.getName()}</p>
      <p><strong>Price:</strong> {currPost.getPrice()}</p>
      <p><strong>Condition:</strong> {currPost.getCondition()}</p>
      <p>
        <strong>Seller Contact:</strong>
        <a href="mailto:{currPost.getSellerId()}">{currPost.getSellerId()}</a>
      </p>
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

  #post-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: 10px;
  }
  .close {
    position: absolute;
    top: 3px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }

  p {
    margin: 10px 0;
    font-size: 16px;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
  p strong {
    font-weight: bold;
    margin-right: 10px;
  }

  p#seller-contact {
    margin-top: 20px;
    font-size: 18px;
  }
</style>
