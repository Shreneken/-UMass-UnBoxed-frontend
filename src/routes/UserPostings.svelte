<script>
    import { makeAuthenticatedRequest } from "./auth/store.js";
    import { Postings } from "./utils/postings.js";
    import GetPost from "./GetPost.svelte";
    import PostCard from "./PostCard.svelte";
    import LoadingScreen from "./LoadingScreen.svelte";

    let showPost = false;
    let currPost = null;
</script>

{#await makeAuthenticatedRequest( "postings/get", { user: true, excludeUser: false } )}
    <LoadingScreen />
{:then postsInfo}
    {#if postsInfo.postings.length === 0}
        <div>No Results Found.</div>
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
</style>
