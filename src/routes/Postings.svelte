<script>
  import GetPost from "./GetPost.svelte";
  import { makeAuthenticatedRequest } from "./auth/store.js";
  import { Postings, Post } from "./utils/postings.js";
  import PostCard from "./PostCard.svelte";

  export let listFilters = {};
  console.log("List filters " + JSON.stringify(listFilters));

  let showPost = false;
  let currPost = null;

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

<!-- {#await makeAuthenticatedRequest("posts", listFilters)} -->
{#await dummyPostsInfo()}
  Loading details...
{:then postsInfo}
  <div id="posting-grid">
    {#each Postings.fromJson(postsInfo).getListPosts() as post}
      <div
        id="post-grid-item"
        on:click={() => {
          showPost = true;
          currPost = post;
        }}
      >
        <PostCard {post} />
      </div>
    {/each}
  </div>
{:catch someError}
  System error: {someError.message}.
{/await}

<GetPost bind:show={showPost} {currPost} />

<style>
  @import "./Postings.css";
</style>
