<script>
    import { CATEGORIES, CATEGORIES_IMAGES } from "./utils/constants.js";
    import Postings from "./Postings.svelte";
    export let listFilters = {};
    let selectedCategories = [];
    function handleCategoryClick(event) {
        const currentCategory = event.target.value;
        if (selectedCategories.includes(currentCategory)) {
            selectedCategories = selectedCategories.filter(
                (category) => category !== currentCategory
            );
        } else {
            selectedCategories = [...selectedCategories, currentCategory];
        }
        listFilters = { categories: selectedCategories };
    }
</script>

<div id="home-container">
    <div id="side-bar">
        {#each CATEGORIES as category}
            <button
                value={category}
                class={selectedCategories.includes(category)
                    ? "side-item-selected"
                    : "side-item-unselected"}
                on:click={handleCategoryClick}
            >
                <img
                    src={CATEGORIES_IMAGES[category]}
                    alt="catImg"
                    id="cat-img"
                />
                {category}
            </button>
        {/each}
    </div>

    {#key listFilters}
        <Postings {listFilters} />
    {/key}
</div>

<style>
    @import "./Home.css";
</style>
