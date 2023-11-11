import { writable } from "svelte/store";

export const viewStore = writable({
  login: 0,
  home: 1,
  account: 2,
  postings: 3,
  current: 1,
});
