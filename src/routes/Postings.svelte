<script>
    import GetPost from "./GetPost.svelte";
    import { makeAuthenticatedRequest } from "./auth/store.js";
    import { Postings, Post } from "./utils/postings.js";
    import PostCard from "./PostCard.svelte";
    import LoadingScreen from "./LoadingScreen.svelte";

    export let listFilters = {};
    console.log("List filters " + JSON.stringify(listFilters));

    let showPost = false;
    let currPost = null;
</script>

{#await makeAuthenticatedRequest("postings/get", listFilters)}
    <LoadingScreen />
{:then postsInfo}
    {#if postsInfo.postings.length === 0}
        <div class="no-results">No Results Found.</div>
    {:else}
        <div id="posting-grid">
            {#each Postings.fromJson(postsInfo.postings).getListPosts() as post}
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
    {/if}
{:catch someError}
    System error: {someError.message}.
{/await}

<GetPost bind:show={showPost} {currPost} />

<style>
    @import "./Postings.css";
</style>
