<script>
    import { makeAuthenticatedRequest } from "./auth/store.js";

    export let show = false;
    export let post;

    function close() {
        show = false;
    }

    async function dummySellerInfo() {
        return { emailAddress: "jdoe@gmail.com" };
    }
</script>

{#if show}
    <div class="modal">
        <div class="modal-content">
            {#await dummySellerInfo()}
                Loading details...
            {:then sellerInfo}
                <!-- {#await makeAuthenticatedRequest("users", undefined, {"userId": post.getSellerId()})} -->
                <span class="close" on:click={close}>✕</span>
                <img src={post.getImage()} alt="Image not Found" />
                <p><b>Name: </b> {post.getName()}</p>
                <p><b>Price: </b> {post.getPrice()}</p>
                <p><b>Condition: </b> {post.getCondition()}</p>
                <p>
                    <b>Seller Contact: </b>
                    <a href="mailto:{sellerInfo.emailAddress}"
                        >{sellerInfo.emailAddress}</a
                    >
                </p>
            {:catch someError}
                System error: {someError.message}.
            {/await}
        </div>
    </div>
{/if}

<style>
    /* Add your modal styles here */
    .modal {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .modal-content {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        position: relative;
        max-width: 400px;
        margin: 0 auto;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;
    }
</style>
