<script>
  import { viewStore } from "./ViewStore.js";
  import Home from "./Home.svelte";
  import Account from "./Account.svelte";
  import UserPostings from "./UserPostings.svelte";
  import { CATEGORIES } from "./utils/constants.js";

  function homeClick(e) {
    e.preventDefault();
    $viewStore.current = $viewStore.home;
  }
  function postingsClick(e) {
    e.preventDefault();
    $viewStore.current = $viewStore.userPostings;
  }
  function accountClick(e) {
    e.preventDefault();
    $viewStore.current = $viewStore.account;
  }
  function handleSubmitClick(e) {
    alert("You clickd submit!");
  }

</script>

<div id="container">
  <div id="top-container">
    <img id="logo" class="top-item" src="asda" alt="logo" />
    <button id="home-btn" class="top-item" on:click={homeClick}> Home </button>
    <button id="your-postings" class="top-item" on:click={postingsClick}>
      Postings
    </button>
    <button id="account" class="top-item" on:click={accountClick}>
      Account
    </button>
  </div>
  <div id="search-bar">
    <select name="Category" class="search-item">
      {#each CATEGORIES as c}
        <option value={c}>{c}</option>
      {/each}
    </select>
    <input type="text" placeholder="Search for items" class="search-item" />
    <button id="submit" class="search-item" on:click={handleSubmitClick}>Submit</button>
    <div />
  </div>
  <div id="main-view">
    {#if $viewStore.current === $viewStore.home}
      <Home />
    {:else if $viewStore.current === $viewStore.userPostings}
      <UserPostings />
    {:else if $viewStore.current === $viewStore.account}
      <Account />
    {/if}
  </div>
</div>

<style>
  @import "./styles.css";
</style>
