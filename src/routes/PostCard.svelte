<script>
  import { Post } from "./utils/postings.js";
  export let post = Post.fromJson({});
</script>

<div id="post-container">
  <img src={post.getImage()} id="post-image" alt="SAD" />
  <div id="post-content">
    <span id="post-name">{post.getName()}</span>
    <span id="post-price">${post.getPrice()}</span>
  </div>
</div>

<style>
    @import "./PostCard.css";
</style>
