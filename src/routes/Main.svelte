<script>
  import { viewStore } from "./ViewStore.js";
  import Home from "./Home.svelte";
  import Account from "./Account.svelte";
  import CreatePost from "./CreatePost.svelte";
  import UserPostings from "./UserPostings.svelte";
  import Postings from "./Postings.svelte";
  import { AREAS } from "./utils/constants.js";

  let selectedHead = ["Home"];

  function homeClick(e) {
    e.preventDefault();
    $viewStore.filterData = {};
    $viewStore.current = $viewStore.home;
    selectedHead = ["Home"];
  }
  function postingsClick(e) {
    e.preventDefault();
    $viewStore.current = $viewStore.userPostings;
    selectedHead = ["MyListings"];
  }
  function accountClick(e) {
    e.preventDefault();
    $viewStore.current = $viewStore.account;
    selectedHead = ["Account"];
  }

  let queryText = "";
  let residentialHall = "All Areas";
  function handleSubmitClick(e) {
    e.preventDefault();
    if (queryText) {
      $viewStore.filterData.queryText = queryText;
    }
    if (residentialHall !== "All Areas") {
      $viewStore.filterData.residentialHall = residentialHall;
    }
  }

  let showCreatePost = false;
  function handleCreateClick() {
    showCreatePost = true;
  }
</script>

<div id="container">
  <div id="top-container">
    <img id="logo" class="top-item-unselected" src="/UMASS-UNBOXED-FULL.png" alt="logo" />
    <button
      id="home-btn"
      class={selectedHead.includes("Home")
        ? "top-item-selected"
        : "top-item-unselected"}
      on:click={homeClick}
    >
      Home
    </button>
    <button
      id="your-postings"
      class={selectedHead.includes("MyListings")
        ? "top-item-selected"
        : "top-item-unselected"}
      on:click={postingsClick}
    >
      My Listings
    </button>
    <button
      id="account"
      class={selectedHead.includes("Account")
        ? "top-item-selected"
        : "top-item-unselected"}
      on:click={accountClick}
    >
      <img src="/white-profile.png" alt="Account" id="account-logo" />
    </button>
  </div>
  <div id="search-bar">
    <select
      name="Residential Hall"
      class="search-item"
      bind:value={residentialHall}
    >
      <option value="All Areas" selected>All Areas</option>
      {#each AREAS as area}
        <option value={area}>{area}</option>
      {/each}
    </select>
    <input
      type="text"
      placeholder="Search for items"
      bind:value={queryText}
      class="search-item"
    />
    <button class="search-item" id="search-logo" on:click={handleSubmitClick}>
      <img src="/search-static.png" alt="Search" id="search-static" />
      <img src="/search-animate.gif" alt="Search" id="search-animate" />
    </button>
  </div>
  <div id="main-view">
    {#if $viewStore.current === $viewStore.home}
      <Home listFilters={$viewStore.filterData} />
    {:else if $viewStore.current === $viewStore.userPostings}
      <UserPostings />
    {:else if $viewStore.current === $viewStore.account}
      <Account />
    {:else if $viewStore.current === $viewStore.allPostings}
      <Postings listFilters={$viewStore.filterData} />
    {/if}
    <button id="create-btn" on:click={handleCreateClick}>+</button>
    <CreatePost bind:show={showCreatePost} />
  </div>
</div>

<style>
  @import "./styles.css";
</style>
