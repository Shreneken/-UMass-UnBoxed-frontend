<script>
  import { Post } from "./utils/postings.js";
  export let post = Post.fromJson({});
</script>

<div id="post-container">
  <img src={post.getImage()} id="post-image" alt="SAD" />
  <div id="post-content">
    <h1 id="post-name">{post.getName()}</h1>
    <h2 id="post-price">${post.getPrice()}</h2>
  </div>
</div>

<style>
    @import "./PostCard.css";
</style>
