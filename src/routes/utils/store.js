import { writable } from "svelte/store";
import { Postings } from "./postings.js";

export const Store = writable(Postings.create());
