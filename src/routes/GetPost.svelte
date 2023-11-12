<script>
    export let show = false;
    export let currPost;

    function close() {
        show = false;
    }
</script>

{#if show}
    <div class="modal">
        <div class="modal-content">
            <span class="close" on:click={close}>✕</span>
            <img
                src={currPost.getImage()}
                alt="Image not Found"
                id="post-img"
            />
            <p><b>Name: </b> {currPost.getName()}</p>
            <p><b>Price: </b> {currPost.getPrice()}</p>
            <p><b>Condition: </b> {currPost.getCondition()}</p>
            <p>
                <b>Seller Contact: </b>
                <a href="mailto:{currPost.getSellerId()}"
                    >{currPost.getSellerId()}</a
                >
            </p>
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

    #post-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        margin-top: 10px;
    }
    .close {
        position: absolute;
        top: 3px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;
    }
</style>
