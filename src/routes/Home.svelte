<script>
    import { AREAS } from "./utils/constants.js";
    import { viewStore } from "./ViewStore.js";

    function handleAreaClick(e) {
        const areaName = e.target.id;
        console.log(`Clicked by ${areaName}`);
        $viewStore.current = $viewStore.allPostings;
        $viewStore.filterData = { "residentialHall": areaName };
    }
</script>

<div id="home-container">
    <div id="grid">
        {#each Object.keys(AREAS) as area}
            <button class="grid-item" id={area} on:click={handleAreaClick}>
                {AREAS[area]}
            </button>
        {/each}
    </div>
</div>

<style>
    @import "./Home.css";
</style>
