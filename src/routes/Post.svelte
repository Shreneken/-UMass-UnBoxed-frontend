<script>
  import { Post } from "./utils/postings.js";
  export let post = Post.fromJson({});
</script>

<div id="post-container">
  <img src={post.getImage()} id="post-image" alt="SAD" />
  <div id="post-content">
    <h2 id="post-name">{post.getName()}</h2>
    <h1 id="post-price">${post.getPrice()}</h1>
  </div>
</div>

<style>
    @import "./Post.css";
</style>
