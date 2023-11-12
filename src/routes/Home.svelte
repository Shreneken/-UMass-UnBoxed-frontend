<script>
  import { AREAS, CATEGORIES } from "./utils/constants.js";
  import { viewStore } from "./ViewStore.js";
  import Postings from "./Postings.svelte";
  let listFilters = {};
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
    listFilters = { category: selectedCategories };
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
        <img src="asdad" alt="catImg" />
        {category}
      </button>
    {/each}
  </div>
  <div id="postings">
    <Postings {listFilters} />
  </div>
</div>

<style>
  @import "./Home.css";
</style>
