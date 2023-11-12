<script>
    import GetPost from "./GetPost.svelte";
    import { makeAuthenticatedRequest } from "./auth/store.js";
    import { Postings, Post } from "./utils/postings.js";
    export let listFilters = {};
    console.log("List filters " + JSON.stringify(listFilters));

    let showPost = false;

    async function dummyPostsInfo() {
        return [
            {
                name: "name",
                price: "price",
                image: "image",
                condition: "condition",
                sellerId: "sellerId",
            },
            {
                name: "name2",
                price: "price2",
                image: "image2",
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
    {#each Postings.fromJson(postsInfo).getListPosts() as post}
        <p><b>Name: </b> {post.getName()}</p>
        <p><b>Price: </b> {post.getPrice()}</p>
        <p><b>Condition: </b> {post.getCondition()}</p>
        <br />
    {/each}
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
