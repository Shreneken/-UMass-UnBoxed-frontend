<script>
    import GetPost from "./GetPost.svelte";
    import { makeAuthenticatedRequest } from "./auth/store.js";
    import { Postings, Post } from "./utils/postings.js";
    import PostCard from "./PostCard.svelte";

    export let listFilters = {};
    console.log("List filters " + JSON.stringify(listFilters));

    // TODO : Remove below before submssion
    listFilters["excludeUser"] = false;

    let showPost = false;
    let currPost = null;
</script>

{#await makeAuthenticatedRequest("postings/get", listFilters)}
    Loading details...
{:then postsInfo}
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
{:catch someError}
    System error: {someError.message}.
{/await}

<GetPost bind:show={showPost} {currPost} />

<style>
    @import "./Postings.css";
</style>
