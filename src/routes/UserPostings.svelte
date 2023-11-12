<script>
    import { makeAuthenticatedRequest } from "./auth/store.js";
    import { user } from "./auth/store.js";
    import { Postings } from "./utils/postings.js";

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

<!-- {#await makeAuthenticatedRequest("posts", undefined, {"user": $user.uid})} -->
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
