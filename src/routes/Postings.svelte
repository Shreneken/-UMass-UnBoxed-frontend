<script>
  import { makeAuthenticatedRequest } from "./auth/store.js";
  import { Postings } from "./utils/postings.js";
  import Post from "./Post.svelte";

  export let listFilters = {};
  console.log("List filters " + JSON.stringify(listFilters));

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

<style>
  @import "./Postings.css";
</style>
