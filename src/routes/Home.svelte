<script>
  import { AREAS } from "./utils/constants.js";
  import { viewStore } from "./ViewStore.js";
  import Postings from "./Postings.svelte";

  function handleAreaClick(e) {
    const areaName = e.target.id;
    console.log(`Clicked by ${areaName}`);
    $viewStore.current = $viewStore.allPostings;
    $viewStore.filterData = { "residential-hall": areaName };
  }

</script>

<div id="home-container">
  <div id="side-bar" />
  <div id="postings">
    <Postings />
  </div>
</div>

<style>
  @import "./Home.css";
</style>
