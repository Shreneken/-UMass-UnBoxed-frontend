<script>
    import { makeAuthenticatedRequest } from "./auth/store.js";
    import { Postings } from "./utils/postings.js";
</script>

{#await makeAuthenticatedRequest("postings/get", undefined, { user: true })}
    Loading details...
{:then postsInfo}
    {#each Postings.fromJson(postsInfo.postings).getListPosts() as post}
        <p><b>Name: </b> {post.getName()}</p>
        <p><b>Price: </b> {post.getPrice()}</p>
        <p><b>Condition: </b> {post.getCondition()}</p>
        <br />
    {/each}
{:catch someError}
    System error: {someError.message}.
{/await}
