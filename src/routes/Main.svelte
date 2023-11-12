<script>
    import { viewStore } from "./ViewStore.js";
    import Home from "./Home.svelte";
    import Account from "./Account.svelte";
    import { CATEGORIES } from "./utils/constants.js";
    import CreatePost from "./CreatePost.svelte";
    import UserPostings from "./UserPostings.svelte";
    import Postings from "./Postings.svelte";
    import { AREAS } from "./utils/constants.js";

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

    let queryText = "";
    let category = "All Areas";
    function handleSubmitClick(e) {
        e.preventDefault();
        $viewStore.current = $viewStore.allPostings;
        $viewStore.filterData = { category: category, queryText: queryText };
    }

    let showCreatePost = false;
    function handleCreateClick() {
        showCreatePost = true;
    }
</script>

<div id="container">
    <div id="top-container">
        <img id="logo" class="top-item" src="/hacklogo.jpg" alt="logo" />
        <button id="home-btn" class="top-item" on:click={homeClick}>
            Home
        </button>
        <button id="your-postings" class="top-item" on:click={postingsClick}>
            Postings
        </button>
        <button id="account" class="top-item" on:click={accountClick}>
            Account
        </button>
    </div>
    <div id="search-bar">
        <select name="Category" class="search-item" bind:value={category}>
            <option value="All Areas" selected>All Areas</option>
            {#each Object.values(AREAS) as area}
                <option value={area}>{area}</option>
            {/each} 
        </select>
        <input
            type="text"
            placeholder="Search for items"
            bind:value={queryText}
            class="search-item"
        />
        <button id="submit" class="search-item" on:click={handleSubmitClick}
            >Submit</button
        >
        <div />
    </div>
    <div id="main-view">
        {#if $viewStore.current === $viewStore.home}
            <Home />
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
