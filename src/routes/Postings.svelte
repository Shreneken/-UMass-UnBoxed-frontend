<script>
    import GetPost from "./GetPost.svelte";
  import { makeAuthenticatedRequest } from "./auth/store.js";
  import { Postings, Post } from "./utils/postings.js";
  import Post from "./Post.svelte";

  export let listFilters = {};
  console.log("List filters " + JSON.stringify(listFilters));

    let showPost = false;

  async function dummyPostsInfo() {
    return [
      {
        name: "fridge",
        price: "100",
        image: "/src/routes/fridge.webp",
        condition: "condition",
        sellerId: "sellerId",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
      {
        name: "bike",
        price: "200",
        image: "/src/routes/fridge.webp",
        condition: "condition2",
        sellerId: "sellerId2",
      },
    ];
  }
</script>

<!-- {#await makeAuthenticatedRequest("posts", undefined, listFilters)} -->
{#await dummyPostsInfo()}
  Loading details...
{:then postsInfo}
  <div id="posting-grid">
    {#each Postings.fromJson(postsInfo).getListPosts() as post}
      <div id="post-grid-item">
        <Post {post} />
      </div>
    {/each}
  </div>
{:catch someError}
  System error: {someError.message}.
{/await}

<button on:click={() => (showPost = true)}>Show Post</button>
<GetPost
    bind:show={showPost}
    post={Post.fromJson({
        name: "name",
        price: "price",
        image: "data:image/png;base64",
        condition: "condition",
        sellerId: "sellerId",
    })}
/>

<style>
  @import "./Postings.css";
</style>
