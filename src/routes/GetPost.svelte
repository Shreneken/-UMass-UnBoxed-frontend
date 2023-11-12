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
      <div class="info-grid">
        <p id="inner1">{currPost.getName()}</p>
        <p id="inner2">${currPost.getPrice()}</p>
        <p id="inner3">
          <span class="label">Condition</span>
          <br />
          <span>{currPost.getCondition()}</span>
        <p id="inner4">
          <span class="label">Seller</span>
          <a href="mailto:{currPost.getSellerId()}">{currPost.getSellerId()}</a>
        </p>
      </div>
    </div>
  </div>
{/if}

<style>
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

  .info-grid {
    display: grid;
    grid-auto-flow: row;
    font-family: Arial;
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  #inner1 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-top: 20px;
    font-weight: bold;    
    font-size: x-large;
  }

  #inner2 {
    text-align: right;
    font-weight: bold;    
    font-size: 60px;
  }

  #inner3 {
    font-size: large;
  }

  #inner4 {
    text-align: right;
    font-size: large;
  }

  .label {
    text-decoration: underline;
  }

  #post-img {
    width: 100%;
    height: 50%;
    object-fit: contain;
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
    font-size: 20px;
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
