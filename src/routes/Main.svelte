<script>
  import { viewStore } from "./ViewStore.js";
  import Home from "./Home.svelte";
  import Postings from "./Postings.svelte";
  import Account from "./Account.svelte";

  function homeClick(e) {
    e.preventDefault();
    $viewStore.current = $viewStore.home;
  }
  function postingsClick(e) {
    e.preventDefault();
    $viewStore.current = $viewStore.postings;
  }
  function accountClick(e) {
    e.preventDefault();
    $viewStore.current = $viewStore.account;
  }
</script>

<div id="container">
  <div id="top-container">
    <div id="logo" class="top-item">
      <a href="#" id="logo-link">logo</a>
    </div>
    <div id="home-btn" class="top-item">
      <a href="#" id="home-link" on:click={homeClick}>Home</a>
    </div>
    <div id="your-postings" class="top-item">
      <a href="#" id="postings-link" on:click={postingsClick}>Postings</a>
    </div>
    <div id="account" class="top-item">
      <a href="#" id="account-link" on:click={accountClick}>Account</a>
    </div>
  </div>
  <div id="main-view">
    {#if $viewStore.current === $viewStore.home}
      <Home />
    {:else if $viewStore.current === $viewStore.postings}
      <Postings />
    {:else if $viewStore.current === $viewStore.account}
      <Account />
    {/if}
  </div>
</div>

<style>
  @import "./styles.css";
</style>
