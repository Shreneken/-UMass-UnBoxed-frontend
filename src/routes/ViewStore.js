import { writable } from "svelte/store";

export const viewStore = writable({
    login: 0,
    home: 1,
    account: 2,
    userPostings: 3,
    allPostings: 4,
    current: 1,
    filterData: {},
});
