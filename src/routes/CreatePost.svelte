<script>
    import { makeAuthenticatedRequest } from "./auth/store.js";
    import { AREAS, CATEGORIES, CONDITIONS } from "./utils/constants.js";
    export let show = false;
    let name,
        price,
        image,
        condition,
        description,
        resArea,
        categories = [];
    function close() {
        show = false;
    }
    async function handleSubmit(e) {
        if (resArea === "Select your residential area") {
            alert("Please select your residential area");
            return;
        }
        if (categories.length === 0) {
            alert("Please select a category");
            return;
        }
        if (condition === "Select your product condition") {
            alert("Please select your product condition");
            return;
        }
        const formData = new FormData();
        formData.append("product_name", name);
        formData.append("condition", condition);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("residential_hall", resArea);
        formData.append("categories", categories);
        formData.append("image", image);

        await makeAuthenticatedRequest(
            "posting/create",
            formData,
            undefined,
            true
        );

        location.reload();

        show = false;
        name = null;
        price = null;
        image = null;
        condition = null;
        description = null;
        resArea = null;
        categories = [];
    }
</script>

{#if show}
    <div class="modal">
        <div class="modal-content">
            <h1 id="title">Create Listing</h1>
            <span class="close" on:click={close}>✕</span>
            <!-- Your modal content goes here -->
            <form on:submit|preventDefault={handleSubmit} id="form">
                <input
                    type="text"
                    id="name"
                    bind:value={name}
                    placeholder="Product Name"
                    class="form-item"
                    required
                />
                <select bind:value={condition} class="form-item">
                    <option
                        value="Select your product condition"
                        selected
                        hidden
                        disabled
                    >
                        Select your product condition</option
                    >
                    {#each CONDITIONS as cond}
                        <option value={cond}>{cond}</option>
                    {/each}
                </select>
                <input
                    type="number"
                    id="price"
                    bind:value={price}
                    placeholder="Price"
                    class="form-item"
                    required
                />
                <textarea
                    id="description"
                    bind:value={description}
                    placeholder="Description"
                    class="form-item"
                    rows="3"
                    cols="34"
                    required
                />
                <select bind:value={resArea} class="form-item">
                    <option
                        value="Select your residential area"
                        selected
                        hidden
                        disabled
                    >
                        Select your residential area</option
                    >
                    {#each AREAS as area}
                        <option value={area}>{area}</option>
                    {/each}
                </select>
                <div class="form-item" id="category-grid">
                    {#each CATEGORIES as category}
                        <label>
                            <input
                                type="checkbox"
                                value={category}
                                bind:group={categories}
                            />
                            {category}</label
                        >
                    {/each}
                </div>
                <label for="image" id="image-label">Image: </label>
                <input
                    type="file"
                    id="image"
                    on:change={(e) => (image = e.target.files[0])}
                    accept="image/*"
                    class="form-item"
                    required
                />
                <button type="submit" id="submit-btn">Submit</button>
            </form>
        </div>
    </div>
{/if}

<style>
    @import "./CreatePost.css";
</style>
