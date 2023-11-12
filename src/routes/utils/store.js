import { writable } from "svelte/store";
import { Postings, Post } from "./postings.js";

export const Store = writable(Postings.create());

export function addPost(postJson) {
    Store.update((postings) => {
        postings.addPost(Post.fromJson(postJson));
    });
}
